import { useContext } from "react";
import { ConfigContext } from "../context/ConfigContext";

export function useConfig()
{
    const context = useContext(ConfigContext)
    if (context === undefined)
    {
        //the text needs to be moved to a resource file
        throw new Error("useConfig must be used with an ConfigProvider")
    }
    return context;
}