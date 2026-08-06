class NeonAccordion {
    constructor(root) {
        this.root = root;
        this.panels = [...root.querySelectorAll(".panel")];
        this.prev = document.querySelector(".nav-prev");
        this.next = document.querySelector(".nav-next");

        this.statusName = document.getElementById("statusName");
        this.modeText = document.getElementById("modeText");

        this.ambientOn = false;
        this.index = Math.max(
            0,
            this.panels.findIndex((p) => p.classList.contains("active"))
        );

        this.bind();
        this.apply(this.index, false);
    }

    bind() {
        // Bind per panel, but compute index at click-time (important for shuffle)
        this.panels.forEach((p) => {
            p.addEventListener("click", () => {
                const liveIndex = this.panels.indexOf(p);
                if (liveIndex !== -1) this.apply(liveIndex, true);
            });

            // micro-parallax on hover / move
            p.addEventListener("mousemove", (e) => {
                if (!p.classList.contains("active")) return;
                const bg = p.querySelector(".panel-bg");
                if (!bg) return;

                const r = p.getBoundingClientRect();
                const x = (e.clientX - r.left) / r.width - 0.5;
                const y = (e.clientY - r.top) / r.height - 0.5;

                bg.style.transform = `scale(1.14) translate(${x * 10}px, ${
                    y * 8
                }px)`;
            });

            p.addEventListener("mouseleave", () => {
                const bg = p.querySelector(".panel-bg");
                if (!bg) return;
                bg.style.transform = "";
            });
        });

        this.prev.addEventListener("click", (e) => {
            e.stopPropagation();
            this.go(-1);
        });

        this.next.addEventListener("click", (e) => {
            e.stopPropagation();
            this.go(1);
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") this.go(-1);
            if (e.key === "ArrowRight") this.go(1);
            if (e.key.toLowerCase() === "a") this.toggleAmbient();
            if (e.key.toLowerCase() === "s") this.shuffle();
        });

        document.querySelectorAll("[data-action]").forEach((btn) => {
            btn.addEventListener("click", () => {
                const action = btn.getAttribute("data-action");
                if (action === "toggle-ambient") this.toggleAmbient();
                if (action === "shuffle") this.shuffle();
            });
        });

        // CTA toast
        this.root.addEventListener("click", (e) => {
            const btn = e.target.closest(".cta, .ghost-btn, .corner");
            if (!btn) return;
            e.stopPropagation();
            this.toast(
                `${
                    this.panels[this.index]?.dataset.title || "Item"
                }: action queued`
            );
        });
    }

    refreshPanels() {
        this.panels = [...this.root.querySelectorAll(".panel")];
    }

    resetActive() {
        this.panels.forEach((p) => {
            p.classList.remove("active");
            const bg = p.querySelector(".panel-bg");
            if (bg) bg.style.transform = "";
        });
        this.index = 0;
        if (this.panels[0]) this.panels[0].classList.add("active");
    }

    apply(i, focusLed = true) {
        if (!this.panels.length) return;

        this.panels.forEach((p) => p.classList.remove("active"));
        const panel = this.panels[i] || this.panels[0];
        panel.classList.add("active");
        this.index = this.panels.indexOf(panel);

        const title =
            panel.dataset.title ||
            `Item ${String(this.index + 1).padStart(2, "0")}`;
        const accent = panel.dataset.accent || "#7CFFB2";
        this.statusName.textContent = title;

        // accent sync
        const led = document.querySelector(".status-led");
        if (led) {
            led.style.background = accent;
            led.style.boxShadow = `0 0 18px ${this.hexToRgba(accent, 0.55)}`;
            if (focusLed) {
                led.animate(
                    [
                        { transform: "scale(1)" },
                        { transform: "scale(1.25)" },
                        { transform: "scale(1)" },
                    ],
                    { duration: 420, easing: "ease-out" }
                );
            }
        }

        const dot = document.querySelector(".dot");
        if (dot) {
            dot.style.background = accent;
            dot.style.boxShadow = `0 0 18px ${this.hexToRgba(accent, 0.55)}`;
        }

        this.panels.forEach((p, idx) =>
            p.setAttribute(
                "aria-selected",
                idx === this.index ? "true" : "false"
            )
        );
    }

    go(delta) {
        if (!this.panels.length) return;
        const next =
            (this.index + delta + this.panels.length) % this.panels.length;
        this.apply(next, true);
    }

    toggleAmbient() {
        this.ambientOn = !this.ambientOn;
        document.body.classList.toggle("ambient", this.ambientOn);

        this.modeText.textContent = this.ambientOn
            ? "Mode: Ambient"
            : "Mode: Crisp";

        const btn = document.querySelector('[data-action="toggle-ambient"]');
        if (btn) btn.textContent = this.ambientOn ? "Crisp" : "Ambient";

        this.toast(
            this.ambientOn ? "Ambient mode enabled" : "Crisp mode enabled"
        );
    }

    shuffle() {
        // current panels snapshot
        const a = [...this.panels];

        // Fisher–Yates shuffle
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }

        // apply new order in DOM
        a.forEach((p) => this.root.appendChild(p));

        // IMPORTANT: refresh + reset after shuffle
        this.refreshPanels();
        this.resetActive();
        this.apply(0, true);

        this.toast("Lineup shuffled + reset");
    }

    toast(text) {
        let t = document.querySelector(".toast");
        if (!t) {
            t = document.createElement("div");
            t.className = "toast";
            document.body.appendChild(t);

            const s = document.createElement("style");
            s.textContent = `
        .toast{
          position: fixed;
          left: 50%;
          bottom: 18px;
          transform: translateX(-50%);
          padding: 10px 12px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(0,0,0,.55);
          color: rgba(234,240,255,.92);
          font: 12px ui-sans-serif, system-ui;
          backdrop-filter: blur(10px);
          box-shadow: 0 18px 60px rgba(0,0,0,.45);
          opacity: 0;
          pointer-events:none;
          z-index: 9999;
        }
      `;
            document.head.appendChild(s);
        }

        t.textContent = text;
        t.animate(
            [
                { opacity: 0, transform: "translateX(-50%) translateY(8px)" },
                { opacity: 1, transform: "translateX(-50%) translateY(0px)" },
                { opacity: 1, transform: "translateX(-50%) translateY(0px)" },
                { opacity: 0, transform: "translateX(-50%) translateY(8px)" },
            ],
            { duration: 1800, easing: "cubic-bezier(.2,.8,.2,1)" }
        );
    }

    hexToRgba(hex, a = 1) {
        const h = hex.replace("#", "").trim();
        const full =
            h.length === 3
                ? h
                      .split("")
                      .map((c) => c + c)
                      .join("")
                : h;
        const n = parseInt(full, 16);
        const r = (n >> 16) & 255;
        const g = (n >> 8) & 255;
        const b = n & 255;
        return `rgba(${r},${g},${b},${a})`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("accordion");
    new NeonAccordion(root);
});
