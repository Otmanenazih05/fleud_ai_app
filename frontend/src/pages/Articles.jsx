import { useState } from "react"
import { Form, useActionData, useNavigation } from "react-router-dom"
import HistorySide from "../components/HistorySide";
import { urlValidation } from "../helpers/dataValidation";
import { scrapeArticle } from "../api/services";
import { getArticleSummary } from "../api/googleSummary";
import { generateCoverImg } from "../api/imgGeneration";
import SummaryResult from "../components/SummaryResult"
import { useContext } from "react";
import { SummaryContext } from "../context/SummaryContext";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const summariseMode = formData.get('summariseMode');
    const length = formData.get('length') || 50;
    const text = formData.get('text');
    const generateCover = formData.get('generateCover');

    let articleTitle = ""
    let articleContent = ""
    let generatedCover = null

    if (summariseMode === 'text' && text.length < 100) return false

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

    if (generateCover) {
        try {
            const prompt = `minimalist, editorial style illustration for an article titled "${articleTitle}". abstract, modern, clean lines, high quality, 4k.`
            const response = await generateCoverImg(prompt);
            if (response.status !== 200) {
                throw new Error(response.data);
            }
            generatedCover = response.data;
        }
        catch (error) {
            return {
                success: false,
                error: "Error generating cover image"
            }
        }
    }

    const summaryData = await getArticleSummary(length, articleTitle, summariseMode, articleContent, text)

    return {
        ...summaryData,
        coverImg: generatedCover,
        preLength: length,
    }
}

export const loader = () => {
    console.log('loader')
}


export default function Articles() {
    const [length, setLength] = useState(50);
    const [wordsCount, setWordsCount] = useState(0);
    const [summarisedWordsCount, setSummarisedWordsCount] = useState(0);
    const [summariseMode, setSummariseMode] = useState('url');
    const [generateCover, setGenerateCover] = useState(true);
    const actionData = useActionData()
    const navigation = useNavigation()
    const { summaryExpand } = useContext(SummaryContext);

    console.log(actionData)

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
                    <Form method="post" className="w-full h-1/2 border border-gray-200 rounded-3xl p-3 shadow-sm shrink-0">
                        <input type="hidden" name="summariseMode" value={summariseMode} />
                        <input type="hidden" name="length" value={length} />
                        <input type="hidden" name="generateCover" value={generateCover} />
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
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

                            <div className="flex items-center gap-3">
                                <span className="text-sm font-bold text-gray-700">Generate cover</span>
                                <div
                                    className={`w-10 h-6 rounded-full p-1 cursor-pointer flex items-center transition-colors duration-200 ${generateCover ? 'bg-orange-400 justify-end' : 'bg-gray-300 justify-start'}`}
                                    onClick={() => setGenerateCover(!generateCover)}
                                >
                                    <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8">
                            <input
                                type="text"
                                name="text"
                                placeholder={summariseMode === 'url' ? 'https://...' : 'Paste text here...'}
                                className="w-full text-center text-wrap overflow-y-scroll text-xl text-gray-700 font-medium placeholder-gray-300 border-none outline-none bg-transparent"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-lg text-xs font-bold text-gray-500">{wordsCount} words</span>
                            <button type="submit" className="bg-black text-white px-8 py-3 rounded-full font-bold flex items-center gap-3 hover:bg-gray-800 transition-colors shadow-lg shadow-black/20 cursor-pointer">
                                <i className="fa-solid fa-wand-magic-sparkles"></i>
                                Summarize
                            </button>
                            <div className="w-[85px]"></div> {/* Spacer for center alignment balance */}
                        </div>
                    </Form>

                    {/* Bottom Card - Result Preview */}
                    <SummaryResult summarisedWordsCount={summarisedWordsCount} length={length}/>
                </div>
            </div>
        </div>
    )
}