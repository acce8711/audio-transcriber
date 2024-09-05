import React, { useContext, useState } from "react";

export const ConfigContext = React.createContext()

export function ConfigProvider( {children} ) {
    const [summarize, setSummarize] = useState()
    const [wordCount, setWordCount] = useState()
    
    return (
        <ConfigContext.Provider value={{summarize, wordCount}}>
            {children}
        </ConfigContext.Provider>
    )
}