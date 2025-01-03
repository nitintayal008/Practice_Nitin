import React, { useContext, useState } from "react";

export const StepperContext = React.createContext({});

export const StepperContextProvider = ({children})=>{
    const [steps, setSteps] = useState(0);
    
    return(
    <StepperContext.Provider value={{steps, setSteps}}>
        {children}
    </StepperContext.Provider>  
    )
}

export const useStepperContext = ()=>{
    const ctx = useContext(StepperContext);
    console.log("efs",ctx);
    return ctx;
}