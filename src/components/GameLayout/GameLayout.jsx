import React from "react";
import PromptDisplay from "../PromptDisplay/PromptDisplay";
import SongInput from "../SongInput/SongInput";

export default function GameLayout() {
  const [songList, setSongList] = React.useState([]);
  const addTextToChat = (message, sender) => {
    // if (!message.trim()) return;
    const newMessage = {
      id: crypto.randomUUID(),
      text: message,
      sender: sender,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setSongList((prevList) => [...prevList, newMessage]);
  };
  return (
    <>
      <PromptDisplay addTextToChat={addTextToChat}></PromptDisplay>
      <SongInput addTextToChat={addTextToChat}></SongInput>
      {songList.length > 0 && (
        <div>
          {songList.map((song) => (
            <div key={song.id}>{song.text}</div>
          ))}
        </div>
      )}
    </>
  );
}
