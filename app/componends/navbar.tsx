import Link from "next/link";
import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] }); //Hier ist einfach eine neue Font

// Bei der Font muss man wie unten einfach den Text in ein  div mit dem className={montserrat.className} einfügen

function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-center p-4 text-black text-2xl">
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
            <div className="p-4">
              <Link href={"/Contact"}>Contact us</Link>
            </div>
            <div className="p-4">
              <Link href={"/Company"}>Company</Link>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Navbar;
