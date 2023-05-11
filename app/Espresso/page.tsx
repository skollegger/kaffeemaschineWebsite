import React from "react";
import Image from "next/image";
import Navbar from "../componends/navbar";

function espresso() {
  return (
    <>    
    <div className="h-full bg-bg_back">
      <Navbar/>
      <h1 className="text-center text-4xl text-black">Espresso</h1>
      <div className="flex flex-row justify-center items-center">
      <div className='flex justify-center items-center p-5'>
          <Image
            src={"/Espresso/espresso2.jpeg"}
            alt={""}
            height={320}
            width={420}
          />
        </div>
        <div className='flex justify-center items-center p-5'>
          <Image
          src={"/Espresso/zubereitung.jpeg"}
          alt={""}
          height={300}
          width={400}
        />
        </div>
        <div className='flex justify-center items-center p-5'>
          <Image
            src={"/Espresso/espresso_macchiato.jpg"}
            alt={""}
            height={300}
            width={400}
          />
        </div>
      </div>
      <div className='flex p-5 flex-row justify-center'>
        <div className='flex justify-center items-center flex-col'>
          <Image
            src={"/Espresso/seite_kaffe.jpg"}
            alt={""}
            height={200}
            width={300}
          />
        </div>
        <div className='flex justify-center items-center p-5 flex-col'>
          <h3 className='text-black text-center text-3xl m-5'>Different Types</h3>
          <Image
            src={"/Espresso/espresso_typen.jpg"}
            alt={""}
            height={500}
            width={600}
          />
        </div>
        <div className='flex justify-center items-center flex-col'>
          <Image
            src={"/Espresso/espresso.jpg"}
            alt={""}
            height={200}
            width={300}
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default espresso;
