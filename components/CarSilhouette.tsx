interface Props {
  className?: string;
}

/**
 * Stylized luxury sports-sedan silhouette drawn entirely with SVG.
 * No external images — pure vector with amber underglow and headlight beam.
 */
export default function CarSilhouette({ className = "" }: Props) {
  const spokes = [0, 72, 144, 216, 288];
  const wheels = [250, 720];

  return (
    <svg
      viewBox="0 0 960 380"
      className={className}
      role="img"
      aria-label="Luxury car silhouette"
    >
      <defs>
        <linearGradient id="dl-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#45454e" />
          <stop offset="45%" stopColor="#1d1d22" />
          <stop offset="100%" stopColor="#0b0b0d" />
        </linearGradient>
        <linearGradient id="dl-glass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#155e75" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#0b1220" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="dl-underglow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dl-beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="0" />
          <stop offset="100%" stopColor="#fde68a" stopOpacity="0.45" />
        </linearGradient>
      </defs>

      {/* headlight beam */}
      <polygon
        points="70,258 -170,205 -170,305 70,280"
        fill="url(#dl-beam)"
        className="animate-beam"
      />

      {/* amber underglow */}
      <ellipse
        cx="480"
        cy="332"
        rx="400"
        ry="26"
        fill="url(#dl-underglow)"
        className="animate-pulse-glow"
      />

      {/* body */}
      <path
        d="M58 276 C58 260 92 252 140 250 C200 247 240 244 285 242 C320 240 340 208 395 196 C450 184 520 182 585 188 C650 194 700 214 760 226 C820 236 870 244 895 252 C908 256 912 264 910 274 L904 288 C860 294 660 296 480 296 C300 296 120 292 66 288 Z"
        fill="url(#dl-body)"
        stroke="#5b5b66"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />

      {/* glasshouse */}
      <path
        d="M352 206 C400 192 470 190 530 194 C580 197 620 210 660 222 L640 228 C590 216 520 208 460 208 C420 208 385 212 360 220 Z"
        fill="url(#dl-glass)"
      />

      {/* side mirror */}
      <path d="M330 214 l-16 -6 4 -10 16 6 Z" fill="#2a2a30" />

      {/* character line + amber skirt light */}
      <path
        d="M120 268 C 350 276, 650 276, 850 264"
        stroke="#f59e0b"
        strokeOpacity="0.55"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M300 250 C 450 256, 600 256, 760 244"
        stroke="#8b8b96"
        strokeOpacity="0.5"
        strokeWidth="1.5"
        fill="none"
      />

      {/* door handle */}
      <rect x="560" y="238" width="34" height="5" rx="2.5" fill="#71717a" opacity="0.8" />

      {/* headlight */}
      <path d="M62 258 L118 252 L112 264 L64 268 Z" fill="#fde68a" opacity="0.9" />
      {/* taillight */}
      <rect x="872" y="252" width="34" height="8" rx="4" fill="#ef4444" opacity="0.85" />

      {/* wheels */}
      {wheels.map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy={284} r="50" fill="#0a0a0c" stroke="#3f3f46" strokeWidth="3" />
          <circle cx={cx} cy={284} r="30" fill="none" stroke="#a1a1aa" strokeWidth="4" />
          {spokes.map((a) => (
            <line
              key={a}
              x1={cx}
              y1={284}
              x2={cx + 27 * Math.cos((a * Math.PI) / 180)}
              y2={284 + 27 * Math.sin((a * Math.PI) / 180)}
              stroke="#a1a1aa"
              strokeWidth="5"
              strokeLinecap="round"
            />
          ))}
          <circle cx={cx} cy={284} r="7" fill="#f59e0b" />
        </g>
      ))}
    </svg>
  );
}
