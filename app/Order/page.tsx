import React, { useState } from "react";
import Image from "next/image";
import Coffee from "./Coffee";

function Page() {
  return (
    <>
      <div className="w-screen bg-bg_back">
        <div className="grid grid-col-2">
          <Coffee
            text="Espresso ist ein leckeres Getränk"
            title="Espresso"
            cost={499}
            imageurl="/Kaffee/kaffee2.jpeg"
          />
          <Coffee
            text="Cappucino ist ein leckeres Getränk"
            title="Cappuccino"
            cost={499}
            imageurl="/Cappucino/cappuccino.jpg"
          />
          <Coffee
            text="Latte Machiato ist ein leckeres Getränk"
            title="Latte Macchiato"
            cost={499}
            imageurl={"/Latte/latte.jpeg"}
          />
        </div>
      </div>
    </>
  );
}

export default Page;
