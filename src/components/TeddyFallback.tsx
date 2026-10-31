type TeddyFallbackProps = {
  mood: "wave" | "heart" | "flower" | "shy" | "hug";
};

export function TeddyFallback({ mood }: TeddyFallbackProps) {
  return (
    <svg className={`teddy-drawing teddy-drawing--${mood}`} viewBox="0 0 240 240" role="presentation" aria-hidden="true">
      <ellipse cx="120" cy="218" rx="66" ry="10" fill="#795b4c" opacity=".10" />
      <g className="teddy-ear teddy-ear--left">
        <circle cx="66" cy="66" r="29" fill="#b98568" />
        <circle cx="66" cy="66" r="15" fill="#e6b8a1" />
      </g>
      <g className="teddy-ear teddy-ear--right">
        <circle cx="174" cy="66" r="29" fill="#b98568" />
        <circle cx="174" cy="66" r="15" fill="#e6b8a1" />
      </g>
      <ellipse cx="120" cy="169" rx="57" ry="55" fill="#c99576" />
      <ellipse cx="120" cy="111" rx="72" ry="66" fill="#d8a889" />
      <ellipse cx="120" cy="130" rx="34" ry="25" fill="#f4d7c4" />
      <ellipse cx="97" cy="108" rx="5" ry="7" fill="#4b3832" />
      <ellipse cx="143" cy="108" rx="5" ry="7" fill="#4b3832" />
      <ellipse cx="120" cy="123" rx="7" ry="5" fill="#795b4c" />
      <path d="M120 128 Q114 137 106 132 M120 128 Q126 137 134 132" fill="none" stroke="#795b4c" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="88" cy="178" rx="19" ry="25" fill="#d8a889" transform="rotate(22 88 178)" />
      <ellipse cx="152" cy="178" rx="19" ry="25" fill="#d8a889" transform="rotate(-22 152 178)" />
      <ellipse cx="91" cy="211" rx="24" ry="12" fill="#b98568" />
      <ellipse cx="149" cy="211" rx="24" ry="12" fill="#b98568" />
      {mood === "heart" || mood === "hug" ? (
        <path d="M120 191 C104 177 89 168 89 153 C89 137 109 132 120 148 C131 132 151 137 151 153 C151 168 136 179 120 191Z" fill="#d96b78" stroke="#fff0e8" strokeWidth="3" />
      ) : null}
      {mood === "flower" ? (
        <g className="teddy-flower-prop" transform="translate(164 145) rotate(18)">
          <path d="M0 24 Q-3 45 3 59" fill="none" stroke="#78906e" strokeWidth="4" strokeLinecap="round" />
          <circle cx="0" cy="16" r="8" fill="#e7a8b4" />
          <circle cx="0" cy="3" r="7" fill="#e7a8b4" />
          <circle cx="12" cy="13" r="7" fill="#e7a8b4" />
          <circle cx="-12" cy="13" r="7" fill="#e7a8b4" />
          <circle cx="0" cy="13" r="5" fill="#e5c37f" />
        </g>
      ) : null}
      {mood === "shy" ? <g fill="#d96b78" opacity=".72"><ellipse cx="78" cy="131" rx="12" ry="6" /><ellipse cx="162" cy="131" rx="12" ry="6" /></g> : null}
      {mood === "wave" ? <g className="teddy-wave-arm"><path d="M166 164 Q194 140 185 106" stroke="#d8a889" strokeWidth="21" fill="none" strokeLinecap="round"/><circle cx="184" cy="99" r="13" fill="#d8a889" /></g> : null}
    </svg>
  );
}
