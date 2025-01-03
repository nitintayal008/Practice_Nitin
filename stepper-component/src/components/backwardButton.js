import { useStepperContext } from "../context/StepperContext"

const BackwardButton = ()=>{
    const { steps, setSteps} = useStepperContext();
    const clickHandler =()=>{
        console.log("yaha error",steps)
        setSteps(steps-1);
    }
    return(
        <div>
            <button onClick={clickHandler}>Back</button>
        </div>
    )
}

export default BackwardButton; 