import React from "react";

const Content1 = ({ matches }: { matches: boolean }) => {
  const backgroundColor: string =
    "var(--Gradient-1, linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%))";
  const borderRadius: number = 32;
  const circleBackground: string =
    "linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0.00) 100%, rgba(37, 33, 201, 0.00) 100% )";

  const staticlabel = {
    yourresult: {
      label: "Your Result",
      style: {
        fontFamily: "sans-serif",
        fontSize: matches ? 34 : 18,
        fontWeight: "bold",
        color: "lightblue",
      },
    },
    tujuheman: {
      label: "76",
      style: {
        color: "lightblue",
        fontFeatureSettings: "clig off, liga off",
        fontFamily: "Hanken Grotesk",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
        textAlign: "center",
        opacity: 0.5,
      },
    },
  };
  return (
    <div
      style={{
        background: backgroundColor,
        borderTopLeftRadius: matches ? 32 : 0,
        borderTopRightRadius: matches ? 32 : 0,
        borderBottomRightRadius: matches ? 32 : 32,
        borderBottomLeftRadius: matches ? 32 : 32,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: matches ? 50 : 30,
        flex: 1,
      }}
    >
      <div style={{ flex: 1 }}>
        <p style={staticlabel.yourresult.style}>
          {staticlabel.yourresult.label}
        </p>
      </div>
      <div
        style={{
          width: "100%",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: matches ? 50 : 30,
        }}
      >
        <div
          style={{
            height: matches ? 350 : 140,
            width: matches ? 350 : 140,
            borderRadius: 350,
            flexShrink: 0,
            backgroundImage: circleBackground,
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontFeatureSettings: "clig off, liga off",
              fontFamily: "Hanken Grotesk",
              fontSize: matches ? 130 : 56,
              fontStyle: "norman",
              fontWeight: "800",
              margin: 0,
            }}
          >
            76
          </p>
          <p
            style={{
              color: "lightblue",
              fontFeatureSettings: "clig off, liga off",
              fontFamily: "Hanken Grotesk",
              fontSize: matches ? 18 : 16,
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              textAlign: "center",
              opacity: 0.5,
              margin: 0,
            }}
          >
            of-100
          </p>
        </div>
      </div>
      <div
        style={{
          marginTop: 30,
          fontSize: matches ? 50 : 24,
          fontWeight: "700",
          color: "var(--White, #FFF)",
          fontFeatureSettings: "clig off, liga off",
          lineHeight: "normal",
          fontStyle: "normal",
        }}
      >
        <p>Great</p>
      </div>
      <div
        style={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: matches ? 50 : 20,
        }}
      >
        <p
          style={{
            width: 450,
            textAlign: "center",
            fontSize: matches ? 30 : 16,
            color: "var(--Light-Blue, #CAC9FF)",
          }}
        >
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </div>
  );
};

export default Content1;
