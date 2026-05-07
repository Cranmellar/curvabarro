/**
 * Concentric skirt travel utilities
 *
 * When moving between print paths, instead of crossing the geometry in a
 * straight line, the nozzle arcs around the centroid of the current layer
 * at the orbit radius R = max(dist(centroid, from), dist(centroid, to)).
 *
 * Short hops (< skirtThreshold mm) travel direct; longer hops take the
 * shorter angular direction (CW or CCW, whichever is < 180°).
 */

export interface MM2 { x: number; y: number }

/** Arithmetic centroid of a flat array of 2-D mm points. */
export function computeCentroid(pts: MM2[]): MM2 {
  if (pts.length === 0) return { x: 0, y: 0 };
  let sx = 0, sy = 0;
  for (const { x, y } of pts) { sx += x; sy += y; }
  return { x: sx / pts.length, y: sy / pts.length };
}

/**
 * Returns intermediate waypoints for a concentric skirt arc from `from` to
 * `to` around `centroid`, or **null** if the straight distance is below
 * `threshold` (direct hop).
 *
 * Points are spaced ~2 mm along the arc; the first point is `from`, the
 * last converges inward to `to` (i.e. the returned array INCLUDES the
 * destination).
 */
export function skirtArcPoints(
  from: MM2,
  to: MM2,
  centroid: MM2,
  threshold: number,
): MM2[] | null {
  const straight = Math.hypot(to.x - from.x, to.y - from.y);
  if (straight < threshold) return null;

  const rA = Math.hypot(from.x - centroid.x, from.y - centroid.y);
  const rB = Math.hypot(to.x   - centroid.x, to.y   - centroid.y);
  const R  = Math.max(rA, rB, 1);          // orbit radius

  const θA = Math.atan2(from.y - centroid.y, from.x - centroid.x);
  const θB = Math.atan2(to.y   - centroid.y, to.x   - centroid.x);

  // Shorter angular direction
  let dθ = θB - θA;
  while (dθ >  Math.PI) dθ -= 2 * Math.PI;
  while (dθ < -Math.PI) dθ += 2 * Math.PI;

  const arcLen  = R * Math.abs(dθ);
  const nSteps  = Math.max(4, Math.ceil(arcLen / 2));   // ~2 mm spacing

  const pts: MM2[] = [];

  // Radial move outward to R (if from-point is inside the orbit circle)
  if (rA < R - 0.5) {
    pts.push({ x: centroid.x + R * Math.cos(θA), y: centroid.y + R * Math.sin(θA) });
  }

  // Arc sweep — final step converges inward to rB
  for (let i = 1; i <= nSteps; i++) {
    const t = i / nSteps;
    const θ = θA + dθ * t;
    const r = i === nSteps ? rB : R;
    pts.push({ x: centroid.x + r * Math.cos(θ), y: centroid.y + r * Math.sin(θ) });
  }

  return pts;
}
