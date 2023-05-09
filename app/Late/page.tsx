import React from 'react';
import Image from "next/image";
import Navbar from "../componends/navbar";

function latte() {
  return (
    <>
    <div className="h-screen bg-bg_back">
      <Navbar/>
      <h1 className='text-black text-4xl text-center'>Latte Macchiato</h1>
      <div className="flex items-center">
        <Image
          className='flex justify-center items-center'
          src={"/Latte/explosion.png"}
          alt={""}
          height={300}
          width={400}
        />
      </div>
      <h3 className='text-black text-center text-2xl'>Ingredients and Layers</h3>
      <div className='flex justify-center items-center'>
        <Image
          src={"/Latte/beschreibung.jpg"}
          alt={""}
          height={400}
          width={500}
        />
      </div>
    </div>
    </>
  )
}
export default latte