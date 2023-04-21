import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./componends/navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
//Hi das Sabine wie gehts?
export default function Home() {
  return (
    <div className=" bg-white w-screen h-screen ">
      <Navbar />
      <div className="w-screen h-full text-black">
        <div className="">
          <div className="text-center ...">
            The first you need <br /> Have a cup of coffee
          </div>
          <div className="flex flex-row">
            <div>
              <Image src={"/kaffee2.jpeg"} alt={""} height={750} width={800} />
            </div>
            <div>
              <div className="text-right">
                Mehr über unsere Kaffeemaschine lernen Sie{" "}
                <Link href={"https://www.google.de/?hl=de"}>hier</Link>:
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
