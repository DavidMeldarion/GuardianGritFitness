type AnalyticsPayload = Record<string, unknown>;

const enabled = typeof window !== "undefined";

export function track(event: string, payload: AnalyticsPayload = {}) {
  if (!enabled) return;
  try {
    // Minimal placeholder analytics; can be swapped for a real provider later.
    console.log(`[analytics] ${event}`, payload);
  } catch (error) {
    // Fail silently
    console.error(error);
  }
}
