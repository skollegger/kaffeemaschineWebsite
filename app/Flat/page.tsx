import React from "react";
import Image from "next/image";
import Navbar from "../componends/navbar";

function flat() {
  return (
    <>
    <div className="h-screen bg-bg_back">
      <Navbar/>
      <h1 className="text-center text-black text-4xl">Flat Late</h1>
      <Image
      src={"/Latte/latte_brot.jpg"}
      alt={""}
      height={300}
      width={400}
      />
    </div>
    </>
    )
}

export default flat;