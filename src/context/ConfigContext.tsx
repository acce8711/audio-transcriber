import React, { createContext, useState } from "react";

interface ConfigContextType{
    summarize: boolean;
    wordCount: number | null;
}

const ConfigContextInitalValues: ConfigContextType = {
    summarize: false,
    wordCount: null,
}

interface Props{
    children: React.ReactNode;
}

export const ConfigContext = React.createContext<ConfigContextType>(ConfigContextInitalValues)

export const ConfigProvider = (props: Props) => {
    const [summarize, setSummarize] = useState<ConfigContextType["summarize"]>(false)
    const [wordCount, setWordCount] = useState<ConfigContextType["wordCount"]>(null)
    
    return (
        <ConfigContext.Provider value={{summarize, wordCount}}>
            {props.children}
        </ConfigContext.Provider>
    )
}