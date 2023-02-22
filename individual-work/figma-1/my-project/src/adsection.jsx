import { useState } from "react";
import "./App.css";
import madeira from "./assets/madeira.png"
import kypr from "./assets/kypr.png"
import sardine from "./assets/sardinie.png"
import { ButtonMain } from "./header";

function Destination(Props){
  return(
    <div class="flex flex-col px-4">
      <img class=""src={Props.img}></img>
      <h1 class="text-xl py-2">{Props.title}</h1>
      <p class="p-1">{Props.text}</p>
    </div>
  )
}

export function AdSection() {
  return (
    <div class="h-screen flex flex-col items-center bg-[#E5E5E5]">
      <h1 class="text-3xl py-10">Prozkoumejte krásy evropských ostrovů</h1>
      <div class="flex flex-row items-center w-3/4">
        <Destination img={madeira} title="Atlantické ostrovy" text="Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Donec iaculis gravida nulla."/>
        <Destination img={kypr} title="Západní středomoří" text="Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Donec iaculis gravida nulla."/>
        <Destination img={sardine} title="Východní středomoří" text="Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Donec iaculis gravida nulla."/>
      </div>
      <button class="bg-orange-300 hover:bg-orange-400 text-white py-2 px-4 m-10">Chci s vámi!</button>
    </div>
  );
}