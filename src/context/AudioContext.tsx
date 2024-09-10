import React, { createContext, useState } from "react";

interface AudioContextType{
    audioFile: Blob | null;
    youtubeLink: string;
    compress: boolean;
    compressedFile: Blob | null;
}

const AudioContextInitalValues: AudioContextType = {
    audioFile: null,
    youtubeLink: "",
    compress: false,
    compressedFile: null,
}

interface Props{
    children: React.ReactNode;
}


export const AudioContext = React.createContext<AudioContextType>(AudioContextInitalValues)

export const AudioProvider = ( props: Props ) => {
    const [audioFile, setAudioFile] = useState<AudioContextType["audioFile"]>(null);
    const [youtubeLink, setYoutubeAudio] = useState<AudioContextType["youtubeLink"]>("");
    const [compress, setCompress] = useState<AudioContextType["compress"]>(false);
    const [compressedFile, setCompressFile] = useState<AudioContextType["compressedFile"]>(null);
    
    return (
        <AudioContext.Provider value={{audioFile, youtubeLink, compress, compressedFile}}>
            {props.children}
        </AudioContext.Provider>
    )
}