import React from "react";
import Image from "next/image";
import Navbar from "../componends/navbar";

function cappucino() {
  return (
  <>
    <div className="h-screen bg-bg_back">
      <Navbar/>
      <h1 className="text-center text-4xl text-black">Cappucino</h1>;
      <Image
        src={"/Cappucino/cappuccino.jpg"}
        alt={""}
        height={300}
        width={400}
      />
    </div>
  </>
  )
}

export default cappucino;
