import React from "react";
import Image from "next/image";
import Navbar from "../componends/navbar";

function cappuccino() {
  return (
  <>
    <div className="h-screen bg-bg_back">
      <Navbar/>
      <h1 className="text-center text-4xl text-black">Cappuccino</h1>
      <Image
        className='flex justify-center items-center'
        src={"/Cappucino/cappuccino.jpg"}
        alt={""}
        height={300}
        width={400}
      />
      <div className="flex flex-row justify-center">
        <div className="flex justify-center items-center">
          <h1 className="text-center text-4xl text-black">Espresso vs. Cappuccino</h1>
          <Image
            src={"/Cappucino/description2.jpg"}
            alt={""}
            height={300}
            width={400}
          />
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-center text-4xl text-black">Ingredients and Layers</h1>
          <Image
            src={"/Cappucino/description3.jpg"}
            alt={""}
            height={300}
            width={400}
          />
        </div>
      </div>
    </div>
  </>
  )
}
export default cappuccino;