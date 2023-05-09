import Link from "next/link";
import React from "react";
import { Montserrat } from "next/font/google";

import { BiCoffee } from "react-icons/bi";

const montserrat = Montserrat({ subsets: ["latin"] }); //Hier ist einfach eine neue Font

// Bei der Font muss man wie unten einfach den Text in ein  div mit dem className={montserrat.className} einfügen

function Navbar() {
  return (
    <>
      <div className=" flex flex-row bg-bg_back text-black justify-between">
        <div className="flex justify-center items-center p-5 text-2xl ">
          <div className="flex text-4xl ">
            <Link href={"/"}><BiCoffee /></Link>
          </div>
        </div>
        <div className="flex flex-row justify-center p-4 items-center text-black text-2xl">
          <div className={montserrat.className}>
            <div className="flex flex-row ">
              <div className="p-4">
                <Link href={"/Espresso"}>Espresso</Link>
              </div>
              <div className="p-4">
                <Link href={"/Late"}>Latte Macchiato</Link>
              </div>
              <div className="p-4">
                <Link href={"/Cappucino"}>Cappucino</Link>
              </div>
              <div className="p-4">
                <Link href={"/Flat"}>Flat White</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-5 text-2xl ">
          <div className="flex mr-10">Login</div>
          <div className="flex bg-black text-white px-5 py-4 rounded-lg ">
            Signup{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;