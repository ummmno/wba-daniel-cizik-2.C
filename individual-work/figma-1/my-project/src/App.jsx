import { useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import { HeaderNav } from "./header";
import { HeroSection } from "./herosection";
import { AdSection } from "./adsection";

function App() {
  return (
    <div className="App">
      <div class="bg-[url('./assets/hero-image.png')] h-screen bg-no-repeat w-screen bg-cover">
        <div class="grid grid-rows-4 grid-cols-2 h-screen">
          <div class="w-max col-span-2">
            <HeaderNav />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div class="row-span-2 p-7 mb-10 mx-10">
            <HeroSection />
          </div>
        </div>
      </div>
      <AdSection />
    </div>
  );
}

export default App;
