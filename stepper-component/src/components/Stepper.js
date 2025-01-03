import React from "react";
import LinnerComponent from "./LinnerComponent.js";
import { useStepperContext } from "../context/StepperContext.js";
import Stepper1 from "./Stepper1.js";
import Stepper2 from "./Stepper2.js";
import Stepper3 from "./Stepper3.js";

const Stepper = ()=>{
    const {steps} = useStepperContext();
    console.log("steps",steps);
    return (
        <div className="mainContainer">
            <div className="upperContainer">
                <div>1</div>
                <LinnerComponent />
                <div>2</div>
                <LinnerComponent />
                <div>3</div>
            </div>
            <div className="lowerContainer">
                {steps == 0 && <Stepper1/>}
                {steps == 1 && <Stepper2/>}
                {steps == 2 && <Stepper3/>}
            </div>
        </div>
    )
};

export default Stepper;