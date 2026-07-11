// Hand-drawn line-art botanical specimens — real Dalmatian coastal maquis flora
// (rosemary, olive, sea fennel, caper, bay laurel, lavender) rendered as SVG
// pressed-herbarium illustrations. Stroke-based, no fills, to read like
// botanical plate engravings rather than icons.

type SprigProps = {
  className?: string;
  color?: string;
};

export function RosemarySprig({ className, color = "var(--moss)" }: SprigProps) {
  return (
    <svg viewBox="0 0 140 260" fill="none" className={className} aria-hidden="true">
      <path d="M70 250 C68 190 66 130 70 20" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {Array.from({ length: 11 }).map((_, i) => {
        const y = 235 - i * 20;
        const len = 34 - i * 1.4;
        return (
          <g key={i}>
            <path d={`M70 ${y} C ${70 - len} ${y - 6}, ${70 - len} ${y - 12}, ${70 - len * 0.7} ${y - 16}`} stroke={color} strokeWidth="1" strokeLinecap="round" />
            <path d={`M70 ${y} C ${70 + len} ${y - 6}, ${70 + len} ${y - 12}, ${70 + len * 0.7} ${y - 16}`} stroke={color} strokeWidth="1" strokeLinecap="round" />
          </g>
        );
      })}
    </svg>
  );
}

export function OliveBranch({ className, color = "var(--moss)" }: SprigProps) {
  return (
    <svg viewBox="0 0 220 160" fill="none" className={className} aria-hidden="true">
      <path d="M10 90 C 60 70, 140 60, 210 40" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {Array.from({ length: 7 }).map((_, i) => {
        const x = 30 + i * 26;
        const y = 85 - i * 6.5;
        const up = i % 2 === 0;
        return (
          <ellipse
            key={i}
            cx={x}
            cy={up ? y - 16 : y + 16}
            rx="14"
            ry="5.5"
            transform={`rotate(${up ? -22 : 22} ${x} ${up ? y - 16 : y + 16})`}
            stroke={color}
            strokeWidth="1"
          />
        );
      })}
      <circle cx="196" cy="46" r="4" stroke={color} strokeWidth="1" />
      <circle cx="204" cy="52" r="3.4" stroke={color} strokeWidth="1" />
    </svg>
  );
}

export function SeaFennel({ className, color = "var(--moss)" }: SprigProps) {
  return (
    <svg viewBox="0 0 160 260" fill="none" className={className} aria-hidden="true">
      <path d="M80 250 C 78 180 82 120 80 30" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {Array.from({ length: 6 }).map((_, i) => {
        const y = 220 - i * 34;
        return (
          <g key={i}>
            <path d={`M80 ${y} C 55 ${y - 10}, 40 ${y - 26}, 30 ${y - 44}`} stroke={color} strokeWidth="0.9" strokeLinecap="round" />
            <path d={`M80 ${y} C 105 ${y - 10}, 120 ${y - 26}, 130 ${y - 44}`} stroke={color} strokeWidth="0.9" strokeLinecap="round" />
          </g>
        );
      })}
      <g>
        {Array.from({ length: 9 }).map((_, i) => (
          <circle key={i} cx={80 + Math.cos((i / 9) * Math.PI * 2) * 16} cy={26 + Math.sin((i / 9) * Math.PI * 2) * 10} r="2.2" stroke={color} strokeWidth="0.8" />
        ))}
      </g>
    </svg>
  );
}

export function CaperFlower({ className, color = "var(--terracotta)" }: SprigProps) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
      <circle cx="80" cy="80" r="7" stroke={color} strokeWidth="1" />
      {Array.from({ length: 4 }).map((_, i) => {
        const a = (i / 4) * Math.PI * 2 + 0.4;
        const x1 = 80 + Math.cos(a) * 12;
        const y1 = 80 + Math.sin(a) * 12;
        const x2 = 80 + Math.cos(a) * 40;
        const y2 = 80 + Math.sin(a) * 40;
        return <ellipse key={i} cx={(x1 + x2) / 2} cy={(y1 + y2) / 2} rx="16" ry="9" transform={`rotate(${(a * 180) / Math.PI} ${(x1 + x2) / 2} ${(y1 + y2) / 2})`} stroke={color} strokeWidth="0.9" />;
      })}
      {Array.from({ length: 10 }).map((_, i) => {
        const a = (i / 10) * Math.PI * 2;
        return <line key={i} x1={80 + Math.cos(a) * 9} y1={80 + Math.sin(a) * 9} x2={80 + Math.cos(a) * 26} y2={80 + Math.sin(a) * 26} stroke={color} strokeWidth="0.7" />;
      })}
    </svg>
  );
}

export function LaurelSprig({ className, color = "var(--moss)" }: SprigProps) {
  return (
    <svg viewBox="0 0 220 120" fill="none" className={className} aria-hidden="true">
      <path d="M10 60 C 70 60, 150 60, 210 60" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {Array.from({ length: 8 }).map((_, i) => {
        const x = 28 + i * 22;
        const up = i % 2 === 0;
        return (
          <path
            key={i}
            d={up ? `M${x} 60 C ${x - 6} 40, ${x + 10} 26, ${x + 22} 24` : `M${x} 60 C ${x - 6} 80, ${x + 10} 94, ${x + 22} 96`}
            stroke={color}
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}

export function LavenderSprig({ className, color = "var(--terracotta)" }: SprigProps) {
  return (
    <svg viewBox="0 0 100 260" fill="none" className={className} aria-hidden="true">
      <path d="M50 250 C 49 170 51 100 50 70" stroke="var(--moss)" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M50 70 C 49 50 51 30 50 12" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse key={i} cx={50 + (i % 2 === 0 ? -4 : 4)} cy={16 + i * 5} rx="6" ry="3" stroke={color} strokeWidth="0.7" />
      ))}
      {Array.from({ length: 4 }).map((_, i) => {
        const y = 200 - i * 28;
        return (
          <g key={i}>
            <path d={`M50 ${y} C 30 ${y - 6}, 20 ${y - 14}, 12 ${y - 24}`} stroke="var(--moss)" strokeWidth="0.8" />
            <path d={`M50 ${y} C 70 ${y - 6}, 80 ${y - 14}, 88 ${y - 24}`} stroke="var(--moss)" strokeWidth="0.8" />
          </g>
        );
      })}
    </svg>
  );
}

/** Small brass-pin marker, standalone. */
export function PinMark({ className }: { className?: string }) {
  return <span className={`pin-dot inline-block h-2.5 w-2.5 rounded-full ${className ?? ""}`} aria-hidden="true" />;
}
