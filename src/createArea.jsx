import React, { useState } from "react";

function CreateArea(props) {
  const [fullText, setFullText] = useState({
    inputText: "",
    textArea: "",
  });

  function inputTextHandle(event) {
    const { name, value } = event.target;

    setFullText((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(fullText);
    setFullText({ inputText: "", textArea: "" });
  }

  return (
    <div>
      <form>
        <input
          name="inputText"
          placeholder="Title"
          value={fullText.inputText}
          onChange={inputTextHandle}
        />

        <textarea
          name="textArea"
          placeholder="Take a note..."
          rows="3"
          value={fullText.textArea}
          onChange={inputTextHandle}
        />
        <button type="button" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;