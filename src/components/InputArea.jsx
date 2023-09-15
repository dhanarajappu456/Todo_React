import React, { useState } from "react";

function InputArea(props) {
  console.log("props", props);

  const [inputText, setInputText] = useState("");
  function handleChange(event) {
    const newText = event.target.value;

    setInputText(newText);
  }
  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      {/* when button is clicked it calls the addItem of the App function that is passed as
  prop called onAdd */}
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
