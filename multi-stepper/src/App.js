import { useState } from "react";
import "./App.css";
import UserForm from "./UserForm";

function App() {
  const data = [{
    "id": "name",
    "label": "Name",
    "type": "text",
    "placeHolder": "Type Name here",
    "button":"next"
  },
  {
    "id": "email",
    "label": "email",
    "type": "email",
    "placeHolder": "Type Email here",
    "button":"next"
  },
  {
    "id": "password",
    "label": "Password",
    "type": "Password",
    "placeHolder": "Type Password here",
    "button":"next"
  }]

  const [formData, setFormData] = useState(data);
  const [index, setIndex] = useState(0);

  const submitHandler =(e)=>{
    e.preventDefault();
    console.log("form submitted");
  }

  const initialState = {
    "name":"",
    "email":"",
    "password":""
  }
  const [saveData, setSaveData] = useState(initialState);

  const nextHandler = () => {
    const currentInputValue = saveData[formData[index].id];
  
    if (!currentInputValue) {
      alert(`Please fill in the ${formData[index].label} field.`);
      return;
    }
  
    if (index < formData.length - 1) {
      setIndex(index + 1);
    }
  };

  const backHandler=()=>{
    setIndex(index-1);
  }

  const changeHandler = (e) => {
    const { id, value } = e.target;
    console.log("rvvcfr", value);
    setSaveData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      {index > 0 && <button onClick={backHandler}>back</button>}
      <UserForm
        {...{ index, formData, changeHandler, submitHandler, saveData }}
      />
      <button onClick={nextHandler}>{formData[index].button}</button>
    </>
  );
}

export default App;
