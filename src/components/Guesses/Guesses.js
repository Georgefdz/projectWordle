import React from "react";

function Guesses({ list }) {
  return (
    <>
      <div className="guess-results">
        {list.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </>
  );
}

export default Guesses;
