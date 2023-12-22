import React, { useState } from "react";
import Popup from "../components/Popup";
import msd from "../assets/msd.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  const [showPopup, setshowPopup] = useState(false);
  const [value, setvalue] = useState("");
  const [title, settitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (+value === 7) {
      setshowPopup(true);
    } else if (isNaN(+value)) {
      if (value.length < 7) {
        settitle(
          `Length of ${value} = ${value.length} + ${7 - value.length} = 7`
        );
        setshowPopup(true);
      } else if (value.length === 7) {
        settitle(`Length of ${value} = ${value.length}`);
        setshowPopup(true);
      } else {
        settitle(
          `Length of ${value} = ${value.length} - ${value.length - 7} = 7`
        );
        setshowPopup(true);
      }
    } else {
      let sum = 0;
      for (let i = 0; i < value.length; i++) {
        sum += parseInt(value[i]);
      }
      if (sum < 7) {
        settitle(`Sum of ${value} = ${sum} + ${7 - sum} = 7`);
        setshowPopup(true);
      } else if (sum === 7) {
        settitle(`Sum of ${value} = ${sum}`);
        setshowPopup(true);
      } else {
        settitle(`Sum of ${value} = ${sum} - ${sum - 7} = 7`);
        setshowPopup(true);
      }
    }
  };
  return (
    <>
      <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center bg-slate-200">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col justify-center items-center bg-white h-[40vh] w-[23vw] rounded-xl shadow-lg"
        >
          <div className="filter brightness-100 w-20 mb-6">
            <img src={msd} alt="MS Dhoni" />
          </div>
          <h1 className="mb-6 text-2xl">Thala For a Reason</h1>
          <input
            type="text"
            className="border border-black rounded-lg p-2 mb-3"
            placeholder="Enter anything"
            onChange={(e) => setvalue(e.target.value)}
          />
          <button
            className="bg-slate-500 p-2 px-10 text-lg rounded-xl text-white"
            type="Submit"
          >
            Check
          </button>
          <h2 className="mt-2">
            By{" "}
            <Link to={"https://linkedin.com/in/gupta-paras/"} target="_blank">
              Paras Gupta
            </Link>{" "}
            |{" "}
            <Link
              to={"https://github.com/CodexParas/thala-for-a-reason"}
              target="_blank"
            >
              Soure Code
            </Link>
          </h2>
        </form>
      </div>
      {showPopup ? <Popup close={setshowPopup} title={title} /> : ""}
    </>
  );
};

export default Home;
