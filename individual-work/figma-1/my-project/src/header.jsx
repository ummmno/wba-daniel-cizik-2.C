import { useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";

export function ButtonMain(Props) {
  return (
    <button class="hover:bg-orange-300 inline-flex items-center uppercase mx-1 p-2">
      {Props.text}
    </button>
  );
}

export function HeaderNav() {
  return (
    <div class="bg-orange-200 w-screen h-32 flex felx-row justify-evenly items-center">
      <div class="flex">
        <img class="w-28 h-auto" src={logo} alt="logo" />
      </div>
      <div class="flex">
        <div class="flex flex-row justify-evenly">
          <ButtonMain text="Dovolena" />
          <ButtonMain text="praktice informace" />
          <ButtonMain text="kontakt" />
        </div>
      </div>
    </div>
  );
}
