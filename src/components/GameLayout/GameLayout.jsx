import React from "react";
import PromptDisplay from "../PromptDisplay/PromptDisplay";
import SongInput from "../SongInput/SongInput";
export default function GameLayout() {
  return (
    <>
      <PromptDisplay></PromptDisplay>
      <SongInput></SongInput>
    </>
  );
}
