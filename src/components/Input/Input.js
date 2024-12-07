import React from "react";

function Input() {
  const [input, setInput] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess: input });
    setInput("");
  }
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => handleSubmit(event)}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={input}
          onChange={(event) => {
            const newInput = event.target.value.toUpperCase();
            setInput(newInput);
          }}
          title="5 letter word"
          pattern="[a-zA-Z]{5}"
          // placeholder="Write a 5 letter word"
        />
      </form>
    </>
  );
}

export default Input;
