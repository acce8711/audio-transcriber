import React, { useContext, useState } from "react";

export const AudioContext = React.createContext()

export function AudioProvider( {children} ) {
    const [audioFile, setAudioFile] = useState()
    const [compress, setCompress] = useState()
    const [compressedFile, setCompressFile] = useState()
    
    return (
        <AudioContext.Provider value={{audioFile, compress, compressedFile}}>
            {children}
        </AudioContext.Provider>
    )
}