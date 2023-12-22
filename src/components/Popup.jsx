import React, { useEffect, useRef } from "react";
import giphy from "../assets/giphy.gif";
import bole from "../assets/bole.mp4";
import { IoIosCloseCircle } from "react-icons/io";

const Popup = ({ close, title }) => {
  const audioRef = useRef(null);
  useEffect(() => {
    audioRef.current.play();
  }, []);
  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-[20px] rounded-lg shadow-lg">
        <div className="justify-between items-center p-2 grid grid-cols-[95%_5%]">
          <div className="justify-center items-center text-center w-full">
            <h1 className="text-lg uppercase font-bold">{title}</h1>
          </div>
          <button
            className="cursor-pointer text-2xl"
            onClick={() => close(false)}
          >
            <IoIosCloseCircle />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="max-w-[100%] h-auto rounded-xl"
            src={giphy}
            alt="thala for a reason"
          />
        </div>
        <audio ref={audioRef} src={bole}></audio>
      </div>
    </div>
  );
};

export default Popup;
