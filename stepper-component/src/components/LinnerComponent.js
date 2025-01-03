import { useCallback, useState } from "react";

const LinnerComponent =()=>{
    const [width, setWidth] = useState("10");
    const [intervalId, setIntervalId] = useState(null);

    const transitStepper = useCallback(()=>{
        if(intervalId){
            clearInterval(intervalId);
        }
            let newWidth = 1;
            const id = setInterval(()=>{
                if(newWidth>=100){
                    clearInterval(id);
                }else{
                    newWidth++;
                    setWidth(newWidth);
                }
            },1)
            setIntervalId(id);
    },[intervalId])

    return (
        <div className="linner">
            <div className="secondlinner" style={{width: `${width}%`}}></div>
            <button onClick={transitStepper}>hello</button>
        </div>

    )
}

export default LinnerComponent;