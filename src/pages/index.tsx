import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Roulette from "../components/Roulette";

const pageStyles: React.CSSProperties = {
  backgroundColor: "#282c34",
  color: "white",
  margin: 0,
  padding: "25px",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  alignItems: "center",
  borderRadius: "6px",
  boxShadow: "#222222 0px 2px 3px 1px",
};

const buttonStyles = {
  padding: "1rem 2rem",
  color: "white",
  backgroundColor: "#102328",
  borderRadius: "20px",
  fontWeight: "bolder",
};

const IndexPage: React.FC<PageProps> = () => {
  const [labels, setLabels] = React.useState<string[]>([]);
  const [d, setD] = React.useState(0);
  const handleClick = React.useCallback(() => {
    const v0 = 20 + 3 * Math.random();
    let t = 0;
    let x = 0;
    let preX = 0;
    const timer = setInterval(() => {
      t += 0.01;
      x = v0 * t + -9.8 * t * t;
      if (preX !== 0 && preX - x > 0) {
        clearTimeout(timer);
      }
      preX = x;
      setD(x);
    }, 30);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <main style={pageStyles}>
      <Roulette rotate={`${d}turn`} size={"400px"} labels={labels} />
      <hr style={{ width: "100%" }} />
      <p>入力欄</p>
      <textarea
        rows={10}
        value={labels.join("\n")}
        onChange={(e) => {
          setLabels(e.target.value.split("\n"));
        }}
      ></textarea>
      <button onClick={handleClick} style={buttonStyles}>
        START
      </button>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Roullette</title>;
