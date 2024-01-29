"use client";

import Image from "next/image";
import iconairbrain from "./assets/logo/iconoir_brain.png";
import iconairchat from "./assets/logo/iconoir_chat-remove.png";
import iconairflash from "./assets/logo/iconoir_flash.png";
import iconaireye from "./assets/logo/iconoir_eye-empty.png";

const Content2 = ({ matches }: { matches: boolean }) => {
  const data: any[] = [
    {
      id: 1,
      label: "Reaction",
      value: "80",
      max: "100",
      background:
        "var(--red-95-white, linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #F55)",
      color: "var(--Red, #F55)",
      icons: iconairflash,
    },
    {
      id: 2,
      label: "Memory",
      value: "92",
      max: "100",
      background:
        "var(--yellow-95-white, linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #FFB21E)",
      color: "var(--Yellow, #FFB21E)",
      icons: iconairbrain,
    },
    {
      id: 3,
      label: "Verbal",
      value: "61",
      max: "100",
      background:
        "var(--green-95-white, linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #00BB8F)",
      color: "var(--Green, #00BB8F);",
      icons: iconairchat,
    },
    {
      id: 1,
      label: "Reaction",
      value: "73",
      max: "100",
      background:
        "var(--blue-95-white, linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #1125D6)",
      color: "var(--Blue, #1125D6)",
      icons: iconaireye,
    },
  ];

  const colorButtons1 =
    "var(--Gradient-1, linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%))";
  const colorButtons2 = "var(--Dark-Navy, #303B59)";

  return (
    <div style={{ flex: 1, padding: matches ? 50 : 30 }}>
      <div style={{ marginBottom: matches ? 60 : 30 }}>
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: matches ? 34 : 18,
            fontWeight: "bold",
            color: "var(--Dark-Navy, #303B59)",
          }}
        >
          Summary
        </p>
      </div>
      <div
        style={{
          alignContent: "space-between",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "column",
          height: 400,
          marginBottom: matches ? 130 : 30,
        }}
      >
        {data?.map((a: any, index: number) => {
          const colors = "var(--Dark-Navy, #303B59)";
          return (
            <div
              key={index}
              style={{
                padding: 20,
                display: "flex",
                justifyContent: "space-between",
                borderWidth: 1,
                borderRadius: 10,
                background: a.background,
                color: a.color,
              }}
            >
              <div style={{ display: "flex", gap: 10 }}>
                <Image src={a.icons} alt="iconair" />
                <p>{a.label}</p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 10,
                  color: colors,
                  fontWeight: 700,
                }}
              >
                <p>{a.value}</p>
                <p style={{ opacity: 0.5 }}>/</p>
                <p style={{ opacity: 0.5 }}>{a.max}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div
        id="buttons"
        style={{
          background:
            "var(--Gradient-1, linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%))",
          padding: matches ? 30 : 20,
          textAlign: "center",
          boxShadow: "0px 30px 60px 0px rgba(61, 108, 236, 0.15)",
          borderRadius: 100,
          color: "var(--White, #FFF)",
          fontWeight: "700",
        }}
        onMouseEnter={() => {
          const j = document.getElementById("buttons");
          if (j) {
            j.style.background = "var(--Dark-Navy, #303B59)";
          }
        }}
        onMouseLeave={() => {
          const j = document.getElementById("buttons");
          if (j) {
            j.style.background = colorButtons1;
          }
        }}
        onClickCapture={() => {
          const j = document.getElementById("buttons");
          if (j) {
            j.style.background = "var(--Dark-Navy, #303B59)";
          }
        }}
      >
        <p>Continue</p>
      </div>
    </div>
  );
};

export default Content2;
