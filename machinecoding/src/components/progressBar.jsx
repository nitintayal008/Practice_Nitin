import { useState } from "react";

const ProgressBar = ()=>{
    const [width, setWidth] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const func =()=>{
        if (intervalId) {
            console.log("errsss",intervalId);
            clearInterval(intervalId);
          }
        let newWidth =0;
        const id = setInterval(frame, 1);
        function frame(){
            if(newWidth >= 99){
                clearInterval(id);
            }
            else{
                newWidth++;
                setWidth(newWidth +1);
            }
        }
        console.log("i am bottom")
        setIntervalId(id);
    }
    return(
        <>
            <h1>Hello</h1>
            <div className="mainBar">
                <div className="internalBar" style={{width:`${width}%`}}>
                    {width}%
                </div>
            </div>

            <button  onClick={func}>click me</button>
        </>
    )
};

export default ProgressBar;