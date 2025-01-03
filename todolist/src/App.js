import { useState } from "react";
import "./App.css";

function App() {
  const [todoElement, setTodoElement] = useState([]);
  const [txt, setTxt] = useState("");
  
  const submitHandler = (e) => {
    if (e.key === "Enter") {
      console.log(e.key);
      e.preventDefault();
      setTxt("");
      setTodoElement([...todoElement, e.target.value]);
    }
  };

  const checkboxHandler = () => {};
  return (
    <div className="App">
      <div className="input-todo">
        <input
          type="text"
          placeholder="Write here..."
          onKeyUp={submitHandler}
        />
      </div>
      <div className="todoList">
        <ul>
          {todoElement &&
            todoElement.map((ele, index) => {
              return (
                <>
                  <input
                    type="checkbox" 
                    onClick={checkboxHandler}
                    value={txt}
                  ></input>
                  <li key={index} className="element-list">
                    {ele}
                  </li>
                  <h4>X</h4>
                </>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
