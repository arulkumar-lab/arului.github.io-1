"use client";

/**
 * LiquidGlassFilter
 *
 * Progressive enhancement for Chromium browsers. Injects two SVG filters:
 *
 *  1. #lg-displacement-filter  – convex quarter-sine dome for .liquid-glass cards
 *  2. #lg-lip-bezel-filter     – lip-bezel profile for .liquid-glass-button
 *     The lip-bezel surface is CONVEX on the outer bezel (edges magnify /
 *     wrap the background inward) and CONCAVE in the centre (background is
 *     zoomed-out, spreading rays outward). This gives the physical sensation
 *     of pressing a pill-shaped glass capsule with a recessed face and a
 *     raised outer rim.
 *
 * Reference: https://kube.io/blog/liquid-glass-css-svg
 * Falls back silently to CSS-only glassmorphism on Safari / Firefox.
 */

import { useEffect } from "react";

// ── Shared constants ───────────────────────────────────────────────────────
const N1 = 1.0;
const N2 = 1.5;
const BEZEL_FRACTION       = 0.22;
const MAX_DISPLACEMENT_PX  = 28;
const BTN_DISPLACEMENT_PX  = 14;   // smaller scale for pill buttons
const MAP_SIZE = 256;

// ── Convex-dome helpers (cards) ────────────────────────────────────────────

/** Quarter-sine convex surface: t=0 (outer edge) → 0, t=1 (inner) → 1 */
function surfaceHeight(t: number): number {
  return Math.sin(Math.max(0, Math.min(1, t)) * (Math.PI / 2));
}

/**
 * Snell–Descartes 1-D refracted displacement magnitude.
 * t = 0 at the outer edge of the bezel, 1 at the inner edge.
 * Returns a signed value; positive → displaced radially outward.
 */
function refractedMagnitude(t: number): number {
  const delta = 0.0005;
  const dy = (surfaceHeight(t + delta) - surfaceHeight(t - delta)) / (2 * delta);

  // Surface normal (2-D slice): pointing "up" from the curved surface.
  // In 3-D we rotate this per-pixel below.
  const nLen = Math.hypot(dy, 1);
  const nx = dy / nLen; // tangential component of normal
  const nz = 1 / nLen;  // depth  component of normal

  // Snell's law: sin θ₂ = (n₁/n₂) · sin θ₁
  // Incident ray is orthogonal to background (θ₁ = angle between ray & normal)
  const sinTheta1 = Math.abs(nx);
  const sinTheta2 = (N1 / N2) * sinTheta1;

  if (sinTheta2 >= 1) return 0; // total internal reflection → no displacement

  const cosTheta2 = Math.sqrt(1 - sinTheta2 * sinTheta2);

  // Refracted tangential displacement (projection onto background plane)
  const sign = nx > 0 ? 1 : -1;
  return sign * sinTheta2 * cosTheta2 * nz;
}

/** 256×256 displacement map for the convex dome (cards). */
function buildDisplacementMap(): string {
  const canvas = document.createElement("canvas");
  canvas.width  = MAP_SIZE;
  canvas.height = MAP_SIZE;
  const ctx = canvas.getContext("2d")!;
  const img = ctx.createImageData(MAP_SIZE, MAP_SIZE);

  const cx = MAP_SIZE / 2;
  const cy = MAP_SIZE / 2;
  const radius  = MAP_SIZE / 2;
  const bezelPx = radius * BEZEL_FRACTION;

  const SAMPLES = 127;
  const magnitudes = Array.from({ length: SAMPLES }, (_, i) =>
    refractedMagnitude(i / (SAMPLES - 1))
  );
  const maxMag   = Math.max(...magnitudes.map(Math.abs), 1e-6);
  const normalised = magnitudes.map((m) => m / maxMag);

  for (let py = 0; py < MAP_SIZE; py++) {
    for (let px = 0; px < MAP_SIZE; px++) {
      const dx   = px - cx;
      const dy   = py - cy;
      const dist = Math.hypot(dx, dy);

      const distFromEdge = radius - dist;
      const t = Math.max(0, Math.min(1, distFromEdge / bezelPx));

      let r = 128, g = 128;

      if (t < 1 && dist > 0.5) {
        const idx = Math.min(SAMPLES - 1, Math.round(t * (SAMPLES - 1)));
        const mag = normalised[idx];
        const angle = Math.atan2(dy, dx);

        r = Math.round(Math.max(0, Math.min(255, 128 + Math.cos(angle) * mag * 127)));
        g = Math.round(Math.max(0, Math.min(255, 128 + Math.sin(angle) * mag * 127)));
      }

      const i = (py * MAP_SIZE + px) * 4;
      img.data[i]     = r;
      img.data[i + 1] = g;
      img.data[i + 2] = 128;
      img.data[i + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
  return canvas.toDataURL("image/png");
}

// ── Lip-bezel helpers (buttons) ────────────────────────────────────────────

/**
 * Lip-bezel surface profile.
 * t = 0 at centre, 1 at outer edge.
 *
 * Signed return value drives the radial displacement direction:
 *   > 0  → radially OUTWARD  – convex bezel zone: background wraps in from
 *           outside, producing magnification/pull at the pill edge.
 *   < 0  → radially INWARD   – concave centre: rays diverge, background is
 *           zoomed-out / spread, making the centre feel recessed.
 *   = 0  → no displacement   (at the very rim and at the profile zero crossing)
 */
function lipBezelMagnitude(t: number): number {
  const convex  = Math.sin(t * Math.PI) * 0.70;           // peak at t≈0.5
  const concave = (1 - Math.sin(t * (Math.PI / 2))) * 0.42; // max at t=0
  return convex - concave;
  // t=0  → 0   − 0.42 = −0.42  (concave centre)
  // t≈0.55 → peak ≈ +0.60      (convex bezel)
  // t=1  → 0   − 0.00 =  0.00  (neutral rim)
}

/** 256×256 displacement map for the lip-bezel pill button. */
function buildLipBezelMap(): string {
  const canvas = document.createElement("canvas");
  canvas.width  = MAP_SIZE;
  canvas.height = MAP_SIZE;
  const ctx = canvas.getContext("2d")!;
  const img = ctx.createImageData(MAP_SIZE, MAP_SIZE);

  const cx = MAP_SIZE / 2;
  const cy = MAP_SIZE / 2;

  const SAMPLES = 256;
  const profile = Array.from({ length: SAMPLES }, (_, i) =>
    lipBezelMagnitude(i / (SAMPLES - 1))
  );
  const maxAbs = Math.max(...profile.map(Math.abs), 1e-6);
  const normProfile = profile.map((v) => v / maxAbs); // [−1, 1]

  for (let py = 0; py < MAP_SIZE; py++) {
    for (let px = 0; px < MAP_SIZE; px++) {
      const nx = (px - cx) / cx; // −1 … +1
      const ny = (py - cy) / cy;

      // Elliptical distance to suit the wider pill shape
      const ellDist = Math.hypot(nx, ny * 1.4);
      const t = Math.min(1, ellDist);

      let r = 128, g = 128;

      if (t > 0.005) {
        const idx = Math.min(SAMPLES - 1, Math.round(t * (SAMPLES - 1)));
        const mag = normProfile[idx];
        const angle = Math.atan2(ny * 1.4, nx);

        r = Math.round(Math.max(0, Math.min(255, 128 + Math.cos(angle) * mag * 110)));
        g = Math.round(Math.max(0, Math.min(255, 128 + Math.sin(angle) * mag * 110)));
      }

      const i = (py * MAP_SIZE + px) * 4;
      img.data[i]     = r;
      img.data[i + 1] = g;
      img.data[i + 2] = 128;
      img.data[i + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
  return canvas.toDataURL("image/png");
}

// ── Shared SVG filter builder ──────────────────────────────────────────────

function makeSvgFilter(
  ns: string,
  id: string,
  mapDataUrl: string,
  scale: number,
  gammaExp: number,
  gammaOffset: number
): Element {
  const filter = document.createElementNS(ns, "filter");
  filter.id = id;
  filter.setAttribute("color-interpolation-filters", "sRGB");
  filter.setAttribute("x", "0%");
  filter.setAttribute("y", "0%");
  filter.setAttribute("width",  "100%");
  filter.setAttribute("height", "100%");

  const feImg = document.createElementNS(ns, "feImage");
  feImg.setAttribute("href",   mapDataUrl);
  feImg.setAttribute("x",      "0");
  feImg.setAttribute("y",      "0");
  feImg.setAttribute("width",  String(MAP_SIZE));
  feImg.setAttribute("height", String(MAP_SIZE));
  feImg.setAttribute("result", "disp_map");

  const feDM = document.createElementNS(ns, "feDisplacementMap");
  feDM.setAttribute("in",              "SourceGraphic");
  feDM.setAttribute("in2",             "disp_map");
  feDM.setAttribute("scale",           String(scale));
  feDM.setAttribute("xChannelSelector","R");
  feDM.setAttribute("yChannelSelector","G");
  feDM.setAttribute("result",          "refracted");

  const feCT = document.createElementNS(ns, "feComponentTransfer");
  feCT.setAttribute("in", "refracted");
  ["feFuncR", "feFuncG", "feFuncB"].forEach((tag) => {
    const fn = document.createElementNS(ns, tag);
    fn.setAttribute("type",      "gamma");
    fn.setAttribute("amplitude", "1");
    fn.setAttribute("exponent",  String(gammaExp));
    fn.setAttribute("offset",    String(gammaOffset));
    feCT.appendChild(fn);
  });

  filter.appendChild(feImg);
  filter.appendChild(feDM);
  filter.appendChild(feCT);
  return filter;
}

// ── React component ────────────────────────────────────────────────────────

export function LiquidGlassFilter() {
  useEffect(() => {
    const isChromium = /Chrome/.test(navigator.userAgent);
    if (!isChromium) return;

    const SVG_ID = "lg-filters-svg";
    if (document.getElementById(SVG_ID)) return;

    const ns  = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.id = SVG_ID;
    svg.setAttribute("aria-hidden", "true");
    svg.style.cssText =
      "position:fixed;width:0;height:0;overflow:hidden;pointer-events:none;z-index:-1;";

    const defs = document.createElementNS(ns, "defs");

    // Filter 1 – convex dome for cards / panels
    defs.appendChild(
      makeSvgFilter(ns, "lg-displacement-filter", buildDisplacementMap(),
        MAX_DISPLACEMENT_PX, 0.88, 0.04)
    );

    // Filter 2 – lip-bezel for pill buttons
    defs.appendChild(
      makeSvgFilter(ns, "lg-lip-bezel-filter", buildLipBezelMap(),
        BTN_DISPLACEMENT_PX, 0.82, 0.06)
    );

    svg.appendChild(defs);
    document.body.appendChild(svg);

    const applyFilters = () => {
      // Cards and panels
      document
        .querySelectorAll<HTMLElement>(".liquid-glass, .liquid-glass-on-color")
        .forEach((el) => {
          const f = "url(#lg-displacement-filter) blur(24px) saturate(200%) brightness(108%)";
          el.style.backdropFilter = f;
          (el.style as CSSStyleDeclaration & { webkitBackdropFilter?: string })
            .webkitBackdropFilter = f;
        });

      // Lip-bezel pill buttons
      document
        .querySelectorAll<HTMLElement>(".liquid-glass-button")
        .forEach((el) => {
          const f = "url(#lg-lip-bezel-filter) blur(20px) saturate(190%) brightness(112%)";
          el.style.backdropFilter = f;
          (el.style as CSSStyleDeclaration & { webkitBackdropFilter?: string })
            .webkitBackdropFilter = f;
        });
    };

    applyFilters();
    requestAnimationFrame(applyFilters);

    return () => {
      svg.remove();
    };
  }, []);

  return null;
}
