import { useContext } from "react";
import { AudioContext } from "../context/AudioContext";

export function useAudio()
{
    const context = useContext(AudioContext)
    if (context === undefined)
    {
        //the text needs to be moved to a resource file
        throw new Error("useAudio must be used with an AudioProvider")
    }
    return context;
}