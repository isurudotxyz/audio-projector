import React from "react";

function validateUrl(url) {
  const patterns = {
    youtube: /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/,
    nina: /^(https?:\/\/)?(www\.)?([a-z]+\.)?ninaprotocol\.com\/.+|nina\.market\/.+$/,
    bandcamp: /^(https?:\/\/)?([a-z0-9-]+\.)?bandcamp\.com\/(track|album)\/.+$/,
  };
  return (
    patterns.youtube.test(url) ||
    patterns.nina.test(url) ||
    patterns.bandcamp.test(url)
  );
}

export default function SongInput({ addTextToChat }) {
  const [url, setUrl] = React.useState("");
  const [error, setError] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateUrl(url)) {
      // Submit song parent component function missing
      addTextToChat(url, "user");
      setUrl("");
      setError("");
    } else {
      setError("Link must be from Youtube, Bandcamp or Nina Protocol");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          placeholder="Paste the track Url here..."
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Submit track</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
