import { useState } from "react";
import logo from "../assets/logo.svg";
import burgermenu from "../assets/burgermenu.svg";

export function ButtonMain(Props) {
  return (
    <button class="hover:bg-orange-300 inline-flex items-center uppercase mx-1 p-2">
      {Props.text}
    </button>
  );
}

export function HeaderNav() {
  return (
    <div class="bg-orange-200 w-screen h-32 flex felx-row lg:justify-evenly s:justify-between items-center">
      <div class="flex">
        <img class="lg:w-28 s:ml-10 s:w-20 h-auto" src={logo} alt="logo" />
      </div>
      <img class="s:w-14 s:mr-10 s:h-auto lg:hidden" src={burgermenu} alt="burgermenu" />
      <div class="flex s:hidden">
        <div class="flex flex-row justify-evenly">
          <ButtonMain text="Dovolená" />
          <ButtonMain text="Prakticé informace" />
          <ButtonMain text="Kontakt" />
        </div>
      </div>
    </div>
  );
}
