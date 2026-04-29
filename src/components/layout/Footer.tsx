export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto w-full max-w-5xl px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Kevin Simba. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
