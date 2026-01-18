import { useContext } from "react"
import { SummaryContext } from "../context/SummaryContext"

export default function SummaryResult() {
    const { summaryExpand, setSummaryExpand, summaryData } = useContext(SummaryContext)

    return (
        <div className="w-full flex-1 bg-white border border-gray-200 rounded-3xl p-4 shadow-sm min-h-0 flex flex-col relative overflow-hidden"
            style={{ width: summaryExpand ? '100%' : 'auto', height: summaryExpand ? '100%' : 'auto' }}
        >
            <div className="flex-1 overflow-y-auto pr-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Summary Result</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                    {summaryData?.summary || 'No summary available'}
                </p>
            </div>

            <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-end gap-3 z-10 bg-white">
                <button className="mr-auto text-xl cursor-pointer" onClick={() => setSummaryExpand(!summaryExpand)}>
                    <i className="fa-solid fa-expand"></i>
                </button>
                <button className="px-4 py-2 bg-black text-white text-sm font-bold rounded-full shadow-md flex items-center gap-2">
                    {summaryData?.summary?.split(' ').length || 0} words
                </button>
                <button className="px-4 py-2 bg-orange-100 text-orange-600 text-sm font-bold rounded-full flex items-center gap-2 hover:bg-orange-200 transition-colors">
                    {summaryData?.preLength}% <i className="fa-solid fa-rotate-right"></i>
                </button>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 text-sm font-bold rounded-full hover:bg-gray-50 transition-colors">
                    {summaryData?.summary ? 'Regenerate' : 'Summarize'}
                </button>
            </div>
        </div>
    )
}