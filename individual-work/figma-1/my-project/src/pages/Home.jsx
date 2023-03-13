import React from "react";
import "../index.css";
import { HeaderNav } from "./Elements/header";
import { HeroSection } from "./Elements/herosection";
import { AdSection } from "./Elements/adsection";
import { MainFooter } from "./Elements/footer";

export function Home() {
  return (
    <div className="App">
      <div class="overflow-hidden bg-[#E5E5E5]">
        <div class="lg:bg-[url('./pages/assets/hero-image.png')] lg:h-screen bg-no-repeat w-screen bg-cover">
          <div class="lg:grid lg:grid-rows-4 lg:grid-cols-2 lg:h-screen">
            <div class="w-max col-span-2">
              <HeaderNav />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div class="row-span-2 py-7 lg:p-7 lg:mb-10 mx-10">
              <HeroSection />
            </div>
          </div>
        </div>
        <AdSection />
        <MainFooter/>
      </div>
    </div>
  );
}