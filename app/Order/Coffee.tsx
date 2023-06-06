"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Image from "next/image";
import getData from "./getData";

interface Props {
  text: string;
  title: string;
  cost: number;
  imageurl: string;
}

function Coffee(props: Props) {
  const [coffee, setCoffee] = useState("");
  const [menge, setmenge] = useState(0);
  const handleButtonClick = (coffeetype: any) => {
    if (coffeetype != coffee) {
      setmenge(0);
    }
    setCoffee(coffeetype);
    console.log(coffee);
    setmenge(menge + 1);
  };

  const handleButtonClick2 = (coffeetype: any) => {
    if (coffeetype != coffee) {
      setmenge(0);
    }
    setCoffee(coffeetype);
    console.log(coffee);
    if (menge > 0) {
      setmenge(menge - 1);
    }
  };

  return (
    <>
      <div className="border bg-slate-700  p-3 m-10 rounded-lg">
        <Image
          src={props.imageurl}
          className=" rounded-xl "
          alt={""}
          height={750}
          width={800}
        />

        <div className="flex flex-row justify-between p-10 ">
          <div className="flex flex-col ">
            <div className="flex border  justify-center rounded-md bg-slate-300 p-4 mr-3 text-black text-3xl items-center">
              {props.title}
            </div>
            <div className="">{props.text}</div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col justify-between">
              <button
                onClick={() => getData(coffee, menge)}
                className="flex justify-center border p-4 mr-1  rounded-md items-center bg-red-400"
              >
                Order
              </button>
              <div className="flex justify-center border p-4 mr-1 rounded-md items-center bg-red-400">
                {menge}
              </div>
            </div>

            <button
              onClick={() => handleButtonClick(props.title)}
              className="bg-bg_back flex justify-center text-7xl items-center p-20 py-4 rounded-md text-black "
            >
              +
            </button>
            <button
              onClick={() => handleButtonClick2(props.title)}
              className="bg-red-400 flex justify-center items-center text-7xl p-4 ml-1 py-4 rounded-md text-white"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coffee;
