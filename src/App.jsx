import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/header";
import GameLayout from "./components/GameLayout/GameLayout";
function App() {
  return (
    <>
      <Header></Header>
      <GameLayout></GameLayout>
    </>
  );
}

export default App;
