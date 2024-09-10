import React, { createContext, useState } from "react";

interface TranscriptContextType{
    transcription: string;
    summary: string;
}

const TranscriptContextInitalValues: TranscriptContextType = {
    transcription: "",
    summary: "",
}

interface Props{
    children: React.ReactNode;
}

export const TranscriptionContext = React.createContext<TranscriptContextType>(TranscriptContextInitalValues)

//need to export the provider to be able to wrap the children
//need to export the context in order to use it in the hook
export const TranscriptionProvider = (props: Props ) => {
    const [transcription, setTranscription] = useState<TranscriptContextType["transcription"]>("")
    const [summary, setSummary] = useState<TranscriptContextType["summary"]>("")
    
    return (
        <TranscriptionContext.Provider value={{transcription, summary}}>
            {props.children}
        </TranscriptionContext.Provider>
    )
}