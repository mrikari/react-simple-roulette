import React from "react";

type Props = {
  labels: string[];
  size: string;
  rotate: string;
};

const rouletteStyles: React.CSSProperties = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  margin: "0",
  fontSize: "30px",
  textAlign: "center",
};

const rouletteSpanStyles: React.CSSProperties = {
  position: "absolute",
  top: "0",
  left: "calc(50% - 15px)",
  display: "inline-block",
  width: "30px",
  height: "50%",
  transformOrigin: "center bottom",
  wordBreak: "break-all",
};

const rouletteHrStyles: React.CSSProperties = {
  position: "absolute",
  top: "-15px",
  left: "calc(50%)",
  display: "inline-block",
  height: "50%",
  transformOrigin: "center bottom",
};

export default function Roulette(props: Props) {
  const { labels, size, rotate } = props;
  const c = labels.length * 2;
  const deg = c !== 0 ? 360 / c : 0;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg
        width={size}
        height={size}
        style={{
          transform: `rotate(${rotate})`,
        }}
      >
        <line
          x1="50%"
          y1="50%"
          x2="50%"
          y2="5%"
          stroke="#f3f"
          stroke-linecap="round"
          stroke-width="3"
        />
      </svg>
      <p style={rouletteStyles}>
        {labels.map((e, i) => (
          <>
            <span
              style={{
                ...rouletteSpanStyles,
                transform: `rotate(${(2 * i + 2) * deg}deg)`,
              }}
            >
              {e}
            </span>
            <hr
              style={{
                ...rouletteHrStyles,
                transform: `rotate(${(2 * i + 1) * deg}deg)`,
              }}
            />
          </>
        ))}
      </p>
    </div>
  );
}
