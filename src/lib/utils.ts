export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | Record<string, boolean>
  | ClassValue[];

export function cn(...values: ClassValue[]): string {
  const out: string[] = [];

  const push = (v: ClassValue) => {
    if (!v) return;
    if (typeof v === "string" || typeof v === "number") {
      out.push(String(v));
      return;
    }
    if (Array.isArray(v)) {
      for (const inner of v) push(inner);
      return;
    }
    if (typeof v === "object") {
      for (const [k, enabled] of Object.entries(v)) {
        if (enabled) out.push(k);
      }
    }
  };

  for (const v of values) push(v);
  return out.join(" ");
}
