import { useState, useEffect, useContext } from "react"
import { Form, useActionData, useNavigation } from "react-router-dom"
import HistorySide from "../components/HistorySide";
import { urlValidation } from "../helpers/dataValidation";
import { scrapeArticle } from "../api/services";
import { getArticleSummary } from "../api/googleSummary";
import SummaryResult from "../components/SummaryResult"
import { SummaryContext } from "../context/SummaryContext";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const summariseMode = formData.get('summariseMode');
    const length = formData.get('length') || 50;
    const text = formData.get('text');

    let articleTitle = ""
    let articleContent = ""

    if (summariseMode === 'text' && text.length < 100){
        return {
            success: false,
            error: "Text must be at least 100 characters long"
        }
    }

    if (summariseMode === 'url') {
        if (urlValidation(text)) {
            try {
                const response = await scrapeArticle(text);
                if (response.status !== 200) {
                    throw new Error(response.data);
                }
                articleTitle = response.data.title;
                articleContent = response.data.text;
            }
            catch (error) {
                return {
                    success: false,
                    error: error.message
                }
            }
        } else {
            return {
                success: false,
                error: "Invalid URL"
            }
        }
    }


    const summaryData = await getArticleSummary(length, articleTitle, summariseMode, articleContent, text)

    if (summaryData.success) {
        return {
            ...summaryData,
            type: "article",
            preLength: +length,
            preWords: +articleContent.split(' ').length,
            postWords: +summaryData.summary.split(' ').length,
        }
    }else{
        return {
            success: false,
            error: summaryData.error
        }
    }
}

export const loader = () => {
    console.log('loader')
}


export default function Articles() {
    const [length, setLength] = useState(50);
    const [summariseMode, setSummariseMode] = useState('url');
    const actionData = useActionData()
    const navigation = useNavigation()
    const { summaryExpand, setSummaryData } = useContext(SummaryContext);


    useEffect(() => {
        if (actionData) {
            setSummaryData(actionData)
        }
    }, [actionData])

    return (
        <div className="w-full h-full flex flex-col font-sans">
            <header className="flex justify-between items-center mb-3">
                <div>
                    <h1 className="text-xl font-bold text-gray-800">Summary article</h1>
                    <p className="text-gray-500 mt-1">Explore content more deeply and effectively.</p>
                </div>
            </header>

            <div className="w-full flex-1 min-h-0 flex gap-6">
                {/* Left Sidebar - History */}
                <HistorySide />

                {/* Right Content */}
                <div className="flex-1 flex flex-col gap-4 overflow-hidden">
                    {/* Top Card - Input */}
                    <Form method="post" className="w-full h-1/2 border border-gray-200 rounded-3xl p-5 shadow-sm shrink-0 flex flex-col justify-around" style={{ display: summaryExpand ? 'none' : 'flex' }}>
                        <input type="hidden" name="summariseMode" value={summariseMode} />
                        <input type="hidden" name="length" value={length} />
                        <div className="flex flex-wrap items-center justify-center gap-5">
                            <div className="bg-white border border-gray-200 rounded-full p-1 flex items-center">
                                <button onClick={() => setSummariseMode('url')} className={`px-6 py-2 ${summariseMode === 'url' ? 'bg-orange-500 text-white' : 'text-gray-500'} rounded-full text-sm font-bold shadow-md cursor-pointer`}>URL</button>
                                <button onClick={() => setSummariseMode('text')} className={`px-6 py-2 ${summariseMode === 'text' ? 'bg-orange-500 text-white' : 'text-gray-500'} rounded-full text-sm font-bold transition-colors cursor-pointer`}>Text</button>
                            </div>

                            <div className="flex items-center gap-4 flex-1 max-w-md mx-4">
                                <span className="text-sm font-bold text-gray-700">Length</span>
                                <div className="flex-1 relative h-6 flex items-center group">
                                    {/* Floating Label */}
                                    <div
                                        className="absolute -top-6 -translate-x-1/2 px-2 py-0.5 bg-white border border-orange-100 text-orange-500 text-xs font-bold rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                        style={{ left: `${length}%` }}
                                    >
                                        {length}%
                                    </div>
                                    <input
                                        type="range"
                                        min={0}
                                        max={100}
                                        value={length}
                                        onChange={(e) => setLength(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-orange-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md transition-all hover:[&::-webkit-slider-thumb]:scale-110"
                                        style={{
                                            background: `linear-gradient(to right, #f97316 ${length}%, #f3f4f6 ${length}%)`
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="h-1/2 flex items-center justify-center">
                            <input
                                type="text"
                                name="text"
                                placeholder={summariseMode === 'url' ? 'https://...' : 'Paste text here...'}
                                className="w-full text-center text-wrap overflow-y-scroll text-xl text-gray-700 font-medium placeholder-gray-300 border-none outline-none bg-transparent"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-lg text-xs font-bold text-gray-500">{actionData?.summary?.split(' ').length || 0} words</span>
                            <button type="submit" disabled={navigation.state === 'submitting'}
                                className="bg-black text-white px-8 py-3 rounded-full font-bold flex items-center gap-3 hover:bg-gray-800 transition-colors shadow-lg shadow-black/20 cursor-pointer"
                            >
                                <i className="fa-solid fa-wand-magic-sparkles"></i>
                                {navigation.state === 'submitting' ? 'Generating...' : 'Summarize'}
                            </button>
                            <div className="w-[85px]"></div> {/* Spacer for center alignment balance */}
                        </div>
                    </Form>

                    {/* Bottom Card - Result Preview */}
                    <SummaryResult />
                </div>
            </div >
        </div >
    )
}