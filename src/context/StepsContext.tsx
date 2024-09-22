import React, { useState, useContext } from "react";

interface StepsContextType {
    currentStep: number;
    incrementStep: () => void;
}

const StepsInitalValues: StepsContextType = {
    currentStep: 1,
    incrementStep: () => null
}

interface Props{
    children: React.ReactNode;
}

export const StepsContext = React.createContext<StepsContextType>(StepsInitalValues);

export const StepsProvider = (props: Props) => {
    const [currentStep, setCurrentStep] = useState<StepsContextType["currentStep"]>(1)

    const incrementStep = () => {
        setCurrentStep(prev => prev + 1)
    }

    return(
        <StepsContext.Provider value={{currentStep, incrementStep}}>
            {props.children}
        </StepsContext.Provider>
    )
}