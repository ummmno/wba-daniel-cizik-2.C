import { useState } from "react";
import madeira from "../assets/madeira.png"
import kypr from "../assets/kypr.png"
import sardine from "../assets/sardinie.png"
import { ButtonMain } from "./header";

function Destination(Props){
  return(
    <div class="flex flex-row lg:flex-col s:py-3 s:px-2 px-4 s:items-center">
      <img class="s:w-32 s:h-32"src={Props.img}></img>
      <div class="s:flex s:flex-col s:pl-2">
        <h1 class="text-xl py-2">{Props.title}</h1>
        <h1 class="text-lg py-2">{Props.subtitle}</h1>
        <p class="lg:p-1 s:text-xs s:pb-2">{Props.text}</p>
      </div>
    </div>
  )
}

export function AdSection() {
  return (
    <div class="lg:h-screen flex flex-col items-center">
      <h1 class="text-xl lg:text-3xl py-10">Prozkoumejte krásy evropských ostrovů</h1>
      <div class="flex flex-col lg:flex-row items-center w-3/4 s:w-5/6">
        <Destination img={madeira} title="Atlantické ostrovy" text="Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Donec iaculis gravida nulla."/>
        <Destination img={kypr} title="Západní středomoří" text="Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Donec iaculis gravida nulla."/>
        <Destination img={sardine} title="Východní středomoří" text="Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Donec iaculis gravida nulla."/>
      </div>
      <button class="bg-orange-300 hover:bg-orange-400 text-white py-2 px-4 m-10">Chci s vámi!</button>
    </div>
  );
}