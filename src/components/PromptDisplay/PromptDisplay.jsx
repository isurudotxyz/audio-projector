import React from "react";

const PROMPT = [
  "Grey sky,snow on the street in a rainbow garden",
  "Hour 18 on a long flight across the world",
  "Waking up from a coma in 2035",
  "Fav find recently at a record store?",
  "A song you like that would surprise your friends?",
  "What is your most rinsed album as a teen?",
  "What is the theme song of your life?",
  "Baptism in the woods",
  "Grocery store on 1 hour of sleep",
  "Track to explain to your past ancestors of where we are in life…",
  "Last track you would want to hear before paying rent?",
  "Climbing to the top of a hill (no end in sight) with wet shoes",
  "A flickering neon sign reflected in a puddle of gasoline",
  "A song that feels like a warm blanket, but you only listen to it when you’re sad.",
];

let availablePrompt = [...PROMPT];

export default function PromptDisplay() {
  const [currentPrompt, setCurrentPrompt] = React.useState(PROMPT[0]);
  const handleNextPrompt = () => {
    if (availablePrompt.length === 0) {
      availablePrompt = [...PROMPT];
    }

    const randomIndex = Math.floor(Math.random() * availablePrompt.length);
    const selectedPrompt = availablePrompt.splice(randomIndex, 1)[0];

    setCurrentPrompt(selectedPrompt);
  };
  return (
    <>
      <div>
        <h3>{currentPrompt}</h3>
        <button onClick={handleNextPrompt}></button>
      </div>
    </>
  );
}
