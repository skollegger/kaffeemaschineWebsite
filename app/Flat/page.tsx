import React from "react";
import Image from "next/image";
import Navbar from "../componends/navbar";

function flat() {
  return (
    <>
    <div className="h-full bg-bg_back">
      <Navbar/>
      <h1 className="text-center text-black text-4xl">Flat White</h1>
      <div className="flex flex-row justify-center items-center">
        <div className='flex justify-center items-center p-5'>
          <Image
          src={"/Flat/maschine.jpg"}
          alt={""}
          height={300}
          width={400}
          />
        </div>
        <div className='flex justify-center items-center p-5'>
          <Image
            src={"/Flat/flat.jpg"}
            alt={""}
            height={300}
            width={400}
          />
        </div>
        <div className='flex justify-center items-center p-5'>
          <Image
            src={"/Flat/milchschaum.jpg"}
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
            src={"/Flat/beschreibung_flat.jpg"}
            alt={""}
            height={270}
            width={370}
          />
        </div>
        <div className='flex justify-center items-center p-5 flex-col'>
          <h3 className='text-black text-center text-3xl m-5'>Flat White vs. Latte Macchiato</h3>
          <Image
            src={"/Flat/FlatVsLatte.jpg"}
            alt={""}
            height={350}
            width={450}
          />
        </div>
      </div>
    </div>
    </>
    )
}

export default flat;