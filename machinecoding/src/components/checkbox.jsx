import { useRef, useState } from "react";

const CheckBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [submit, setSubmit] = useState([]);
  const [checkedState, setCheckedState] = useState([]);

  const inputRef = useRef();

  const enterHandler = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
        setCheckedState([...checkedState, false]);
      setSubmit([...submit, e.target.value]);
      setInputValue("");
    }
    e.preventDefault();
  };

  const checkboxHandler = (index) => {
    const updatedCheckedState = checkedState.map((item, i) =>{
        console.log("itemmm",item);
        return i === index ? !item : item
    }
    );
    setCheckedState(updatedCheckedState);
  };

  const spanHandler = (index) => {
    submit.splice(index, 1);
    setSubmit([...submit]);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onKeyUp={enterHandler}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <ul style={{listStyle: "none"}}>
          {submit.map((temp, index) => (
            <li key={index} >
              <label>
                <input
                  type="checkbox"
                  value={temp}
                  checked={checkedState[index]}
                  onChange={() => checkboxHandler(index)}
                />
                {temp}
              </label>
              {checkedState[index] && (
                <span onClick={() => spanHandler(index)}>X</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckBox;
