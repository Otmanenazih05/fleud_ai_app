import { createContext, useState, useEffect } from "react";
import { createSummary } from "../api/services";

export const SummaryContext = createContext()

export const SummaryProvider = ({children}) => {
    const [summaryExpand, setSummaryExpand] = useState(false)
    const [summaryData, setSummaryData] = useState(null)

    useEffect(() => {
        if(summaryData){
            createSummary(summaryData)
        }
    }, [summaryData])

    const context = {
        summaryExpand,
        setSummaryExpand,
        summaryData,
        setSummaryData
    }

    return(
        <SummaryContext.Provider value={context}>
            {children}
        </SummaryContext.Provider>
    )
}