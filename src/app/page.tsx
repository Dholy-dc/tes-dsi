"use client";
import React from "react";
import Content1 from "./content1";
import Content2 from "./content2";
import { fontsfamily } from "./fonts";

const Home = () => {
  const [matches, setMatches] = React.useState<any>(true);

  React.useEffect(() => {
    setMatches(window.matchMedia("(min-width:768px)").matches);
  }, []);

  React.useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setMatches(e.matches);
    });
  }, [matches]);
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "white",
        color: "black",
        padding: matches ? 5 : 0,
        overflow: "auto",
        flexDirection: matches ? "row" : "column",
        fontFamily: fontsfamily,
      }}
    >
      <Content1 matches={matches} />
      <Content2 matches={matches} />
    </div>
  );
};

export default Home;
