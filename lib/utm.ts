import type { ReadonlyURLSearchParams } from "next/navigation";

export type UtmParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

type ParamLike = URLSearchParams | ReadonlyURLSearchParams | null | undefined;

export function parseUtmParams(params: ParamLike): UtmParams {
  if (!params) return {};
  const get = (key: string) => params.get(key) || undefined;
  return {
    utm_source: get("utm_source"),
    utm_medium: get("utm_medium"),
    utm_campaign: get("utm_campaign"),
    utm_content: get("utm_content"),
    utm_term: get("utm_term"),
  };
}

export function sanitizeUtm(utm: Partial<UtmParams> = {}): UtmParams {
  const entries = Object.entries(utm).filter(([, value]) =>
    typeof value === "string" && value.trim() ? true : false,
  ) as Array<[keyof UtmParams, string]>;
  return Object.fromEntries(entries) as UtmParams;
}
