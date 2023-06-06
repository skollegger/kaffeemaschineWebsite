import React, { useState } from "react";
import Image from "next/image";
import Coffee from "./Coffee";

export default async function getData(kaffeetyp: string, menge: number) {
  try {
    const res = await fetch(
      `http://localhost:8080/process?string=${kaffeetyp}&number=${menge}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log("es gab einen error");

    console.log(error);
  }
}
