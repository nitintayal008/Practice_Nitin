import './App.css';
import { useEffect, useState } from 'react';
import Counter from './components/reversal.jsx';
import ProgressBar from './components/progressBar.jsx';
import LocalStoragee from './components/localStoragee.jsx';
import CheckBox from './components/checkbox.jsx';
import QuizApp from './components/quizapp.jsx'
import BubleEffect from './components/bubbleeffect.jsx';
import FormValidation from './components/quizapp.jsx';

function App() {
  const [selectedElement, setSelectedElement] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  console.log(suggestions.users);
  const clickHandler =(e)=>{
    setSelectedElement(e.target.value)
  }

  useEffect(()=>{
    const fetchUsers = ()=>{
      if(selectedElement.trim() == ""){
        setSuggestions([]);
        return;
      }
      fetch("https://dummyjson.com/users?q=Jo")
      .then((res)=> res.json())
      .then((data)=> setSuggestions(data))
      .catch((err) => console.log(err));
  
    }
    fetchUsers();
  },[selectedElement])

  const selectionHandler =(e)=>{
    console.log(e.target.value)
  }

  return (
    <div className="user-search-container">
      {/* <QuizApp/>
      <BubleEffect/> */}
      <FormValidation/>
    </div>
  );
}

export default App;
