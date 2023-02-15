import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function Button(Props) {
  return (
    <button class="hover:bg-orange-300 inline-flex items-center uppercase mx-1 p-2">
      {Props.text}
    </button>
  );
}
function App() {
  return (
    <div className="App">
      <div class="bg-orange-200 w-screen h-20 flex felx-row justify-evenly items-center">
        <div class="flex">
          <h1>logo</h1>
        </div>
        <div class="flex">
          <div class="flex flex-row justify-evenly">
            <Button text="Dovolena"/>
            <Button text="praktice informace"/>
            <Button text="kontakt"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
