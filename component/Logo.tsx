"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// ── colour tokens ──────────────────────────────────────────────
const DARK = {
  bg0: "#1a0a3c", bg1: "#0b0520", bg2: "#030110",
  ambient0: "#e879f9", ambient1: "#818cf8",
  ring0: "#a78bfa", ring1: "#e879f9", ring2: "#22d3ee",
  star0: "#e879f9", star1: "#22d3ee",
  line0: "#c084fc", line1: "#22d3ee",
  orbit1: "#818cf8", orbit2: "#c084fc",
  hexEdge: "#22d3ee", triEdge: "#a78bfa",
  innerNode1: "#818cf8", innerNode2: "#c084fc",
  hexCyan: "#22d3ee", hexViolet: "#a78bfa",
  nodeDot: "white",
  halo: "#e879f9",
  pulse: "#818cf8",
  cardinalA: "#22d3ee", cardinalB: "#a78bfa",
};

const LIGHT = {
  bg0: "#f5f3ff", bg1: "#ede9fe", bg2: "#ddd6fe",
  ambient0: "#d946ef", ambient1: "#8b5cf6",
  ring0: "#7c3aed", ring1: "#c026d3", ring2: "#0891b2",
  star0: "#c026d3", star1: "#0891b2",
  line0: "#7c3aed", line1: "#0891b2",
  orbit1: "#7c3aed", orbit2: "#9333ea",
  hexEdge: "#0891b2", triEdge: "#7c3aed",
  innerNode1: "#6d28d9", innerNode2: "#7c3aed",
  hexCyan: "#0891b2", hexViolet: "#7c3aed",
  nodeDot: "#1e1b4b",
  halo: "#c026d3",
  pulse: "#6d28d9",
  cardinalA: "#0891b2", cardinalB: "#7c3aed",
};
// ──────────────────────────────────────────────────────────────

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 40, className = "" }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Use dark colours until mounted (SSR / hydration safe)
  const c = mounted && resolvedTheme === "light" ? LIGHT : DARK;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      aria-label="AI Neural Spark"
      role="img"
    >
      <defs>
        <radialGradient id="logo-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={c.bg0}/>
          <stop offset="65%"  stopColor={c.bg1}/>
          <stop offset="100%" stopColor={c.bg2}/>
        </radialGradient>

        <radialGradient id="logo-coreAmbient" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={c.ambient0} stopOpacity="1"/>
          <stop offset="45%"  stopColor={c.ambient1} stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#0ea5e9"  stopOpacity="0"/>
        </radialGradient>

        <linearGradient id="logo-ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor={c.ring0}/>
          <stop offset="40%"  stopColor={c.ring1}/>
          <stop offset="100%" stopColor={c.ring2}/>
        </linearGradient>

        <linearGradient id="logo-starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor={c.star0}/>
          <stop offset="100%" stopColor={c.star1}/>
        </linearGradient>

        <linearGradient id="logo-lineGrad"
          x1="100" y1="100" x2="170" y2="170"
          gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor={c.line0} stopOpacity="0.85"/>
          <stop offset="100%" stopColor={c.line1}  stopOpacity="0.20"/>
        </linearGradient>

        <filter id="logo-nodeGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="logo-bigGlow" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="logo-lineGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <circle cx="100" cy="100" r="100" fill="url(#logo-bg)"/>

      {/* Core ambient glow */}
      <circle cx="100" cy="100" r="28" fill="url(#logo-coreAmbient)" opacity="0.65"/>

      {/* Orbit rings */}
      <circle cx="100" cy="100" r="60" fill="none"
        stroke={c.orbit1} strokeWidth="0.5" strokeOpacity="0.28"
        strokeDasharray="3.5 6">
        <animateTransform attributeName="transform" type="rotate"
          from="0 100 100" to="360 100 100"
          dur="40s" repeatCount="indefinite"/>
      </circle>
      <circle cx="100" cy="100" r="30" fill="none"
        stroke={c.orbit2} strokeWidth="0.4" strokeOpacity="0.35"
        strokeDasharray="2.5 5">
        <animateTransform attributeName="transform" type="rotate"
          from="0 100 100" to="-360 100 100"
          dur="22s" repeatCount="indefinite"/>
      </circle>

      {/* Center → hex outer connections */}
      <g filter="url(#logo-lineGlow)" stroke="url(#logo-lineGrad)" strokeWidth="0.9">
        <line x1="100" y1="100" x2="160" y2="100"  strokeOpacity="0.55"/>
        <line x1="100" y1="100" x2="130" y2="152"  strokeOpacity="0.50"/>
        <line x1="100" y1="100" x2="70"  y2="152"  strokeOpacity="0.45"/>
        <line x1="100" y1="100" x2="40"  y2="100"  strokeOpacity="0.55"/>
        <line x1="100" y1="100" x2="70"  y2="48"   strokeOpacity="0.45"/>
        <line x1="100" y1="100" x2="130" y2="48"   strokeOpacity="0.50"/>
      </g>

      {/* Center → inner triangle nodes */}
      <g stroke={c.innerNode1} strokeWidth="0.7" strokeOpacity="0.40">
        <line x1="100" y1="100" x2="126" y2="115"/>
        <line x1="100" y1="100" x2="74"  y2="115"/>
        <line x1="100" y1="100" x2="100" y2="70"/>
      </g>

      {/* Hex outer ring edges */}
      <g stroke={c.hexEdge} strokeWidth="0.6" strokeOpacity="0.28">
        <line x1="160" y1="100" x2="130" y2="152"/>
        <line x1="130" y1="152" x2="70"  y2="152"/>
        <line x1="70"  y1="152" x2="40"  y2="100"/>
        <line x1="40"  y1="100" x2="70"  y2="48"/>
        <line x1="70"  y1="48"  x2="130" y2="48"/>
        <line x1="130" y1="48"  x2="160" y2="100"/>
      </g>

      {/* Inner triangle edges */}
      <g stroke={c.triEdge} strokeWidth="0.6" strokeOpacity="0.35">
        <line x1="126" y1="115" x2="74"  y2="115"/>
        <line x1="74"  y1="115" x2="100" y2="70"/>
        <line x1="100" y1="70"  x2="126" y2="115"/>
      </g>

      {/* Inner nodes → nearest hex outer */}
      <g stroke={c.innerNode1} strokeWidth="0.5" strokeOpacity="0.22">
        <line x1="126" y1="115" x2="160" y2="100"/>
        <line x1="126" y1="115" x2="130" y2="152"/>
        <line x1="74"  y1="115" x2="70"  y2="152"/>
        <line x1="74"  y1="115" x2="40"  y2="100"/>
        <line x1="100" y1="70"  x2="70"  y2="48"/>
        <line x1="100" y1="70"  x2="130" y2="48"/>
      </g>

      {/* Inner triangle nodes */}
      <circle cx="126" cy="115" r="3.5" fill={c.innerNode1} filter="url(#logo-nodeGlow)" opacity="0.90"/>
      <circle cx="74"  cy="115" r="3.5" fill={c.innerNode1} filter="url(#logo-nodeGlow)" opacity="0.90"/>
      <circle cx="100" cy="70"  r="3.5" fill={c.innerNode2} filter="url(#logo-nodeGlow)" opacity="0.90"/>

      {/* Hex outer nodes — cyan / violet alternating */}
      <circle cx="160" cy="100" r="5.5" fill={c.hexCyan}   filter="url(#logo-nodeGlow)"/>
      <circle cx="160" cy="100" r="2.2" fill={c.nodeDot} opacity="0.85"/>
      <circle cx="130" cy="152" r="5.5" fill={c.hexViolet} filter="url(#logo-nodeGlow)"/>
      <circle cx="130" cy="152" r="2.2" fill={c.nodeDot} opacity="0.85"/>
      <circle cx="70"  cy="152" r="5.5" fill={c.hexCyan}   filter="url(#logo-nodeGlow)"/>
      <circle cx="70"  cy="152" r="2.2" fill={c.nodeDot} opacity="0.85"/>
      <circle cx="40"  cy="100" r="5.5" fill={c.hexViolet} filter="url(#logo-nodeGlow)"/>
      <circle cx="40"  cy="100" r="2.2" fill={c.nodeDot} opacity="0.85"/>
      <circle cx="70"  cy="48"  r="5.5" fill={c.hexCyan}   filter="url(#logo-nodeGlow)"/>
      <circle cx="70"  cy="48"  r="2.2" fill={c.nodeDot} opacity="0.85"/>
      <circle cx="130" cy="48"  r="5.5" fill={c.hexViolet} filter="url(#logo-nodeGlow)"/>
      <circle cx="130" cy="48"  r="2.2" fill={c.nodeDot} opacity="0.85"/>

      {/* Center: pulsing halo + rotating 4-pointed spark */}
      <circle cx="100" cy="100" r="11" fill={c.halo} filter="url(#logo-bigGlow)" opacity="0.5">
        <animate attributeName="opacity" values="0.35;0.72;0.35" dur="2.8s" repeatCount="indefinite"/>
      </circle>
      {/* 4-pointed star: outer R=9, inner R=3.8 */}
      <path
        d="M100,91 L102.69,97.31 L109,100 L102.69,102.69 L100,109 L97.31,102.69 L91,100 L97.31,97.31 Z"
        fill="url(#logo-starGrad)" filter="url(#logo-bigGlow)">
        <animateTransform attributeName="transform" type="rotate"
          from="0 100 100" to="360 100 100"
          dur="12s" repeatCount="indefinite"/>
      </path>
      <circle cx="100" cy="100" r="2.8" fill="white" opacity="0.95"/>

      {/* Outer decorative ring */}
      <circle cx="100" cy="100" r="96" fill="none"
        stroke="url(#logo-ringGrad)" strokeWidth="1.5" strokeOpacity="0.65"/>

      {/* Cardinal sparkle dots */}
      <circle cx="196" cy="100" r="1.8" fill={c.cardinalA} opacity="0.80"/>
      <circle cx="100" cy="196" r="1.8" fill={c.cardinalB} opacity="0.80"/>
      <circle cx="4"   cy="100" r="1.8" fill={c.cardinalA} opacity="0.80"/>
      <circle cx="100" cy="4"   r="1.8" fill={c.cardinalB} opacity="0.80"/>

      {/* Expanding pulse ring */}
      <circle cx="100" cy="100" r="18" fill="none"
        stroke={c.pulse} strokeWidth="1.2" opacity="0">
        <animate attributeName="r"       values="18;55;18" dur="3.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.55;0;0.55" dur="3.5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}
