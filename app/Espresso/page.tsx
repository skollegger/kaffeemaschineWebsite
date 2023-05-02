import React from "react";
import Image from "next/image";
import Navbar from "../componends/navbar";

function espresso() {
  return (
    <>    
    <div className="h-screen bg-[#D2B48C]">
      <Navbar/>
      <h1 className="text-center text-4xl text-black">Die Espresso Herstellung</h1>
      <Image
        src={"/Espresso/esspresso1.jpeg"}
        alt={""}
        height={300}
        width={400}
      />
      </div>
    </>
  );
}

export default espresso;
