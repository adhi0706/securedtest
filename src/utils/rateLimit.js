// Simple in-memory IP rate limiter. For production, replace with Redis (fixed window or sliding window).
// Usage:
//  import { rateLimit } from "../../utils/rateLimit";
//  const allow = rateLimit(req, { windowMs: 60_000, max: 20 });
//  if (!allow) return res.status(429).json({ error: "Too Many Requests" });

const buckets = new Map();

export function rateLimit(req, options = {}) {
  const windowMs = Number(
    options.windowMs ?? process.env.RATE_LIMIT_WINDOW ?? 60_000
  );
  const max = Number(options.max ?? process.env.RATE_LIMIT_MAX ?? 20);

  try {
    const ip = (
      req.headers["x-forwarded-for"]?.toString().split(",")[0] ??
      req.socket?.remoteAddress ??
      "unknown"
    ).trim();

    const now = Date.now();
    const bucket = buckets.get(ip) || { count: 0, resetAt: now + windowMs };

    if (now > bucket.resetAt) {
      bucket.count = 0;
      bucket.resetAt = now + windowMs;
    }

    bucket.count += 1;
    buckets.set(ip, bucket);

    const allow = bucket.count <= max;
    return allow;
  } catch (e) {
    // In case of any unexpected error, do not block the request.
    return true;
  }
}