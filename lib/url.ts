import { UtmParams } from "./utm";

export function appendUtmParams(url: string, utm: UtmParams = {}): string {
  const base = url.startsWith("http")
    ? undefined
    : typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_SITE_URL || "https://guardiangrit.fit";

  const target = new URL(url, base);
  Object.entries(utm).forEach(([key, value]) => {
    if (value) target.searchParams.set(key, value);
  });
  return target.toString();
}
