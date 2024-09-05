import React, { useContext, useState } from "react";

export const TranscriptionContext = React.createContext()

//need to export the provider to be able to wrap the children
//need to export the context in order to use it in the hook
export function TranscriptionProvider( {children} ) {
    const [transcription, setTranscription] = useState()
    const [summary, setSummary] = useState()
    
    return (
        <TranscriptionContext.Provider value={{transcription, summary}}>
            {children}
        </TranscriptionContext.Provider>
    )
}