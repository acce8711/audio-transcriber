import { useContext } from "react";
import { TranscriptionContext } from "../context/TranscriptionContext";

export function useTranscription()
{
    const context = useContext(TranscriptionContext)
    if (context === undefined)
    {
        //the text needs to be moved to a resource file
        throw new Error("useTranscription must be used with an ConfigTranscription")
    }
    return context;
}