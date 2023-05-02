import React from "react";
import Image from "next/image";
import Navbar from "../componends/navbar";

function espresso() {
  return (
    <>    
    <div className="h-screen bg-bg_back">
      <Navbar/>
      <h1 className="text-center text-4xl text-black">Espresso</h1>
      <Image
        src={"/Espresso/zubereitung.jpeg"}
        alt={""}
        height={300}
        width={400}
      />
      </div>
    </>
  );
}

export default espresso;
