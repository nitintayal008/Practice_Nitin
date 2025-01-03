const firstAccordin = document.getElementsByClassName('first-accord')[0]; 
firstAccordin.addEventListener("click", () => {
    if (firstAccordin.classList.contains("down")) {
        firstAccordin.classList.remove("down");
        const p = firstAccordin.querySelector("p");
        if (p) {
            firstAccordin.removeChild(p);
        }
    } else {
        if (!firstAccordin.querySelector("p")) {
            const newEle = document.createElement("p");
            newEle.innerHTML = "hello";
            firstAccordin.appendChild(newEle);
        }
        firstAccordin.classList.add("down");
    }
});
