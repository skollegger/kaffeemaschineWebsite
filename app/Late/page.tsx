import React from 'react';
import Image from "next/image";
import Navbar from "../componends/navbar";

function latte() {
  return (
    <>
    <div className="h-full bg-bg_back">
      <Navbar/>
      <h1 className='text-black text-4xl text-center'>Latte Macchiato</h1>
      <div className="flex flex-row justify-center items-center">
        <div className='flex justify-center items-center p-5'>
          <Image
            src={"/Latte/ahorn_late.jpg"}
            alt={""}
            height={250}
            width={350}
          />
        </div>
        <div className='flex justify-center items-center p-5'>
          <Image
            src={"/Latte/explosion.png"}
            alt={""}
            height={300}
            width={400}
          />
        </div>
        <div className='flex justify-center items-center p-5'>
          <Image
            src={"/Latte/latte_glas.jpg"}
            alt={""}
            height={300}
            width={400}
          />
        </div>
      </div>
      <div className='flex p-5 flex-row justify-center'>
        <div className='flex justify-center items-center flex-col'>
          <h3 className='text-black text-left text-3xl m-5'>Ingredients and Layers</h3>
          <Image
            src={"/Latte/beschreibung_late.jpg"}
            alt={""}
            height={270}
            width={370}
          />
        </div>
        <div className='flex justify-center items-center p-5 flex-col'>
          <h3 className='text-black text-center text-3xl m-5'>Difference between three</h3>
          <Image
            src={"/Latte/CLFw_unterschied.jpg"}
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
export default latte