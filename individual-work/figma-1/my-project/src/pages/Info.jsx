import React from "react";
import "../index.css";
import { HeaderNav } from "./Elements/header";
import { MainFooter } from "./Elements/footer";
import coronavirus from "./assets/coronavirus.svg";
import luggage from "./assets/luggage.svg";
import sale from "./assets/sale.svg";
import doc from "./assets/doc.svg";

function InfoItem(Props) {
  return (
    <div className="flex items-center">
      <img src={Props.icon} alt="Icon" className="w-1/4 h-auto mr-2" />
      <span className="lg:text-xl uppercase">{Props.text}</span>
    </div>
  );
}

export function Info() {
  return (
    <div class="overflow-hidden bg-[#E5E5E5] h-screen">
      <HeaderNav />
      <div className="mx-auto w-2/3 flex justify-center lg:pt-48 pt-10">
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 grid-rows-6 lg:gap-12 gap-8 items justify-center">
          <InfoItem icon={coronavirus} text="Aktuálně covid-19"/>
          <InfoItem icon={luggage} text="Průběh dovolené"/>
          <InfoItem icon={sale} text="slevový systém"/>
          <InfoItem icon={doc} text="smlouva o zájezdu"/>
          <InfoItem icon={doc} text="cestovní pojištění"/>
          <InfoItem icon={doc} text="obchodní podmínky"/>
        </div>
      </div>
      <div class="absolute bottom-0">
        <MainFooter />
      </div>
    </div>
  );
}
