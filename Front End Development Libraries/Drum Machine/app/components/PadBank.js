import React, { useState, useEffect } from "react";
import Display from "./control/Display";

const soundMappings = {
  Q: { key: "Q", name: "Heater-1", file: "../audio/Heater-1.mp3" },
  W: { key: "W", name: "Heater-2", file: "../audio/Heater-2.mp3" },
  E: { key: "E", name: "Heater-3", file: "../audio/Heater-3.mp3" },
  A: { key: "A", name: "Heater-4", file: "../audio/Heater-4_1.mp3" },
  S: { key: "S", name: "Clap", file: "../audio/Heater-6.mp3" },
  D: { key: "D", name: "Open-HH", file: "../audio/Dsc_Oh.mp3" },
  Z: { key: "Z", name: "Kick-n'-hat", file: "../audio/Kick_n_Hat.mp3" },
  X: { key: "X", name: "Kick", file: "../audio/RP4_KICK_1.mp3" },
  C: { key: "C", name: "Closed-HH", file: "../audio/Cev_H2.mp3" },
};

function SoundPadWrapper({ children }) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();
      if (soundMappings[key]) {
        const soundKey = soundMappings[key].key;
        const myDiv = document.getElementById(soundKey);
        if (myDiv) {
          myDiv.style.backgroundColor = "#ffbb00";
          setTimeout(() => {
            myDiv.style.backgroundColor = "";
          }, 100);
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return <div>{children}</div>;
}

export default function Home() {
  const [isSoundName, setIsSoundName] = useState("");

  const playSound = (key) => {
    const audioFile = soundMappings[key]?.file;
    if (audioFile) {
      const audio = new Audio(audioFile);
      const soundName = soundMappings[key]?.name;
      setIsSoundName(soundName || "");
      audio.play();
    }
  };

  const buttonElements = Object.keys(soundMappings).map((key) => (
    <div
      onClick={() => playSound(key)}
      id={key}
      className=" relative float-left w-[100px] h-[80px] mr-2 rounded-md pt-[35px] border-box cursor-pointer mt-[10px] shadow-[3px_3px_5px_black] padBankButton "
      key={key}>
      <audio
        className="dphidden w-[300px] h-[54px]"
        src={soundMappings[key].file}></audio>
      {key}
    </div>
  ));

  return (
    <>
      <div className="w-[332px] h-[272px] inline-block m-[20px] ">
        <SoundPadWrapper>{buttonElements}</SoundPadWrapper>
      </div>
      <Display isSoundName={isSoundName} />
    </>
  );
}
