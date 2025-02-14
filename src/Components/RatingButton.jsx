import React, { useState } from "react";

const DiscoButton = () => {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["#d353c2fb", "#45a4f1", "green", "yellow", "orange", "red"];

  const handleClick = () => {
    setLikes(likes + 1);
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: colors[colorIndex],
        color: "white",
        border: "none",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
      }}
    >
      {likes} Likes
    </button>
  );
};

export default DiscoButton;
