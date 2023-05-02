import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./componends/navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
//Hi das Sabine wie gehts?
//danke gut und dir?
// Gut danke :) Habe ein wenig Nachgeholden...

// Hier ist ein bisschen Erklärung zum Code

// Ein grid ist auch recht einfach grid dann grid-cols-2 und dann grid-rows-2 ist ein grid mit 2 spalten und 2 reihen
// w-3/5 ist die 3/5 der verfügbaren Breite
// rounded benutzt man um ein Bild oder div zu runden schaut etwas cooler aus
// p-5 ist der Abstand von dem Bild zum Rand
export default function Home() {
  return (
    <div className="w-screen h-screen bg-bg_creme">
      <Navbar />
      <div className="w-screen h-full text-black">
        <div className="">
          <div className="flex flex-row  justify-center">
            <div className="grid grid-cols-2 grid-rows-2 w-3/5 h-3/5">
              <div className=" flex justify-center col-span-1 row-span-1 ">
                <div className="p-5 rounded-md">
                  <Image
                    src={"/Kaffee/kaffee2.jpeg"}
                    className=" rounded-xl "
                    alt={""}
                    height={750}
                    width={800}
                  />
                </div>
              </div>
              <div className=" flex justify-center col-span-1  row-span-1  ">
                <div className="p-5 rounded-md">
                  <Image
                    src={"/Kaffee/kaffee2.jpeg"}
                    className=" rounded-xl "
                    alt={""}
                    height={750}
                    width={800}
                  />
                </div>
              </div>
              <div className=" flex justify-center col-span-1 row-span-1 ">
                <div className="p-5 rounded-md">
                  <Image
                    src={"/Kaffee/kaffee2.jpeg"}
                    className=" rounded-xl "
                    alt={""}
                    height={750}
                    width={800}
                  />
                </div>
              </div>
              <div className=" flex justify-center col-span-1 row-span-1 ">
                <div className="p-5 rounded-md">
                  <Image
                    src={"/Kaffee/kaffee2.jpeg"}
                    className=" rounded-xl "
                    alt={""}
                    height={750}
                    width={800}
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-7xl p-10">
                <div className={montserrat.className}>
                  The first you need <br /> Is a cup of coffee
                </div>
              </div>
              <div>
                <div className="p-5 text-2xl">
                  <div className={montserrat.className}>
                    Mehr über unsere Kaffeemaschine lernen Sie{" "}
                  </div>
                  <Link href={"https://www.google.de/?hl=de"}>hier</Link>:
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>Shop now</div>
            <div>Our Story</div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
