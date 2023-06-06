import React from "react";
import Image from "next/image";
import Navbar from "../componends/navbar";

function cappuccino() {
  return (
  <>
    <div className="h-full bg-bg_back">
      <Navbar/>
      <h1 className="text-center text-4xl text-black">Cappuccino</h1>
      <div className="flex flex-row justify-center items-center">
      <div className='flex justify-center items-center p-5'>
          <Image
            src={"/Cappucino/cappuccino2.jpg"}
            alt={""}
            height={320}
            width={420}
          />
        </div>
        <div className='flex justify-center items-center p-5'>
          <Image
            className='flex justify-center items-center'
            src={"/Cappucino/cappuccino.jpg"}
            alt={""}
            height={280}
            width={380}
          />
        </div>
        <div className='flex justify-center items-center p-5'>
          <Image
            src={"/Cappucino/farben.jpg"}
            alt={""}
            height={180}
            width={280}
          />
        </div>
      </div>
      <div className='flex p-5 flex-row justify-center'>
        <div className='flex justify-center items-center flex-col'>
          <h1 className="text-center text-3xl text-black m-5">Espresso vs. Cappuccino</h1>
          <Image
            src={"/Cappucino/description2.jpg"}
            alt={""}
            height={300}
            width={400}
          />
        </div>
        <div className='flex justify-center items-center p-5 flex-col'>
          <h1 className="text-center text-3xl text-black m-5">Ingredients and Layers</h1>
          <Image
            src={"/Cappucino/description.jpg"}
            alt={""}
            height={250}
            width={350}
          />
        </div>
      </div>
    </div>
  </>
  )
}
export default cappuccino;