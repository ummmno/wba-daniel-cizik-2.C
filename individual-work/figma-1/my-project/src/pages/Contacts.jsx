import React from "react";
import "../index.css";
import { HeaderNav } from "./Elements/header";
import { MainFooter } from "./Elements/footer";

export function Contacts() {
  return (
    <div class="overflow-hidden bg-[#E5E5E5] h-screen">
      <HeaderNav />
      <div class="flex flex-col items-center justify-items-center w-screen">
        <h1 class="text-4xl p-10">Kontakt</h1>
        <div class="grid grid-rows-6 lg:grid-cols-2 w-2/3 gap-2">
          <div>
            <form>
              <input
                type="text"
                placeholder="Jméno"
                class="w-full bg-orange-200 p-1"
              ></input>
            </form>
          </div>
          <div>
            <form>
              <input
                type="text"
                placeholder="Příjmení"
                class="w-full bg-orange-200 p-1"
              ></input>
            </form>
          </div>
          <div>
            <form>
              <input
                type="text"
                placeholder="E-mail"
                class="w-full bg-orange-200 p-1"
              ></input>
            </form>
          </div>
          <div>
            <form>
              <input
                type="text"
                placeholder="Telefon"
                class="w-full bg-orange-200 p-1"
              ></input>
            </form>
          </div>
          <div class="lg:col-span-2 row-span-4">
            <form class="w-full h-full">
              <input
                type="text"
                placeholder="Vaše zpráva"
                class="w-full h-full bg-orange-200 p-1"
              ></input>
            </form>
          </div>
        </div>
      </div>
      <div class="flex justify-center p-20">
        <button class="bg-orange-300 hover:bg-orange-400 text-white py-2 px-4">
          Chci s vámi!
        </button>
      </div>
      <div class="absolute bottom-0">
        <MainFooter />
      </div>
    </div>
  );
}
