import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./componends/navbar";
import Link from "next/link";
import { CiCoffeeBean } from "react-icons/ci";
import { BsFillCupHotFill } from "react-icons/bs";
import { BsCup } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
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
    <div className="w-screen h-screen bg-bg_back">
      <Navbar />
      <div className="w-screen h-full  text-black">
        <div className="">
          <div className="flex flex-row pb-20  justify-center">
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
          <div className="w-screen  flex justify-evenly pt-20 pb-20 h-full text-white  flex-row bg-bright_b">
            <div className="flex flex-col p-10 ">
              <CiCoffeeBean className="text-6xl m-4 ml-0" />
              <div className="text-2xl w-60 h-52">
                Test our new coffee beans. Fresh and tasty with a nice aroma and
                a great taste.
              </div>
              <AiOutlineArrowRight className="text-4xl" />
            </div>
            <div className="flex flex-col p-10 ">
              <BsFillCupHotFill className="text-6xl m-4 ml-0" />
              <div className="text-2xl w-60 h-52">
                Out nice and tasty coffee. Freshly brewed and with a great taste
                and in different variations brightens up your day.
              </div>
              <AiOutlineArrowRight className="text-4xl" />
            </div>
            <div className="flex flex-col p-10 ">
              <BsCup className="text-6xl m-4 ml-0 " />
              <div className="text-2xl w-60 h-52">
                Test our new coffee beans. Fresh and tasty with a nice aroma and
                a great taste.
              </div>
              <AiOutlineArrowRight className="text-4xl" />
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}