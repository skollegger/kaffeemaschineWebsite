import React from "react";
import Image from "next/image";
import Navbar from "../componends/navbar";

function cappuccino() {
  return (
  <>
    <div className="h-screen bg-bg_back">
      <Navbar/>
      <h1 className="text-center text-4xl text-black">Cappuccino</h1>;
      <Image
        className='flex justify-center items-center'
        src={"/Cappucino/cappuccino.jpg"}
        alt={""}
        height={300}
        width={400}
      />
      <h1 className="text-center text-4xl text-black">Espresso vs. Cappuccino</h1>;
      <Image
        className='flex justify-center items-center'
        src={"/Cappucino/description2.jpg"}
        alt={""}
        height={300}
        width={400}
      />
    </div>
  </>
  )
}
export default cappuccino;