import React from "react";
import Image from "next/image";
import Navbar from "../componends/navbar";

function cappuccino() {
  return (
  <>
    <div className="h-full bg-bg_back">
      <Navbar/>
      <h1 className="text-center text-4xl text-black">Cappuccino</h1>
      <Image
        className='flex justify-center items-center'
        src={"/Cappucino/cappuccino.jpg"}
        alt={""}
        height={300}
        width={400}
      />
      <div className='flex p-5 flex-row justify-center'>
        <div className='flex justify-center items-center flex-col'>
          <h1 className="text-center text-2xl text-black m-5">Espresso vs. Cappuccino</h1>
          <Image
            src={"/Cappucino/description2.jpg"}
            alt={""}
            height={300}
            width={400}
          />
        </div>
        <div className='flex justify-center items-center p-5 flex-col'>
          <h1 className="text-center text-2xl text-black m-5">Ingredients and Layers</h1>
          <Image
            src={"/Cappucino/description.jpg"}
            alt={""}
            height={200}
            width={300}
          />
        </div>
      </div>
    </div>
  </>
  )
}
export default cappuccino;