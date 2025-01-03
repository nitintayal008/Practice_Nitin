import { useStepperContext } from "../context/StepperContext"

const ForwardButton = ()=>{
    const { steps, setSteps} = useStepperContext();
    const clickHandler =()=>{
        setSteps(steps+1);
    }
    return(
        <div>
            <button onClick={clickHandler}>Next</button>
        </div>
    )
}

export default ForwardButton; 