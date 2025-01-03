// Mock Server
const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  var pre = 'pre';
  var post = 'post';
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}

(function(){
    const inputbox = document.getElementById("input-box");
    const suggestionBox = document.getElementById("suggestion-box");

    function onFocus(){
        suggestionBox.style.display = "block";
    }

    function onBlur(e){
        console.log("hello_there",e.target);
        if(e.target == input || e.target == suggestionBox){
            return;
        }
        suggestionBox.style.display = "none";
    }

    function cickHandler(e){
        console.log(e.target.innerText);
        inputbox.value = e.target.innerText;
        input.focus();
    }   

    function searchData(e){
        suggestionBox.innerHTML = "";
        console.log(e.target.value);
        const text = e.target.value;
        if(!text.trim()){
            return;
        }
        const data = async()=>  {
            const newData = await getSuggestions(text);   
            const list = document.createElement("ul");
            newData.forEach((temp)=>{
                const listItems = document.createElement("li");
                listItems.innerText = temp;
                list.appendChild(listItems);
            })
            suggestionBox.innerHTML = "";
            console.log('rwsdv', list);
            suggestionBox.appendChild(list);
        }
        data();
    }

    inputbox.addEventListener('focus', onFocus);
    window.addEventListener('click', onBlur);
    inputbox.addEventListener('keyup',(e)=>searchData(e))
    suggestionBox.addEventListener("click", cickHandler, true)
})();   