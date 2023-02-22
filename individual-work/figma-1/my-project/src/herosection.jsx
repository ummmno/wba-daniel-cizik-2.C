import { useState } from "react";
import "./App.css";

export function HeroSection() {
  return(
    <div className="bg-orange-200/60 h-full p-10 flex flex-col items-center">
      <h1 class="text-center text-3xl uppercase mb-10">Dovolená s námi</h1>
      <p class="mb-10">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Sed convallis magna eu sem.</p>
      <button class="bg-orange-300 hover:bg-orange-400 text-white py-2 px-4">Chci s vámi!</button>
    </div>
  );
}