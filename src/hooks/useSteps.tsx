import { useContext } from "react";
import { StepsContext } from "../context/StepsContext";

export function useSteps()
{
    const context = useContext(StepsContext)
    if (context === undefined)
    {
        //the text needs to be moved to a resource file
        throw new Error("useSteps must be used with an StepsProvider")
    }
    return context;
}