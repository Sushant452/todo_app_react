import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [item, setItem] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    if (inputText.trim() === "") return;
    setItem((preItem) => {
      return [...preItem, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          value={inputText}
          placeHolder="Add new task"
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoItem, index) => (
            <li key={index}>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
