import { createContext, useState } from "react";

export const SummaryContext = createContext()

export const SummaryProvider = ({children}) => {
    const [summaryExpand, setSummaryExpand] = useState(false)
    const [summaryData, setSummaryData] = useState(null)

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