import { useSteps } from "../hooks/useSteps"

const Navigation = () => {
    const {currentStep} = useSteps();

    const stepDescriptions: Array<string> = [
        "Select file",
        "Transcribe",
        "Output"
    ]

    const steps = stepDescriptions.map((value, index) => {
    const active = (index + 1) <= currentStep ? "step-primary" : ""
    return(<li className={`step ${active}`}>{value}</li>)})

    return(
        <ul className="steps" style={{"min-width": "700px"}}>
            {steps}
        </ul>
    )
}

export default Navigation