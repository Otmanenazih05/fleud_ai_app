import { useState } from "react"
import { NavLink, Form } from "react-router-dom"
import HistorySide from "../components/HistorySide";
import { Buffer } from "buffer";
import { getDocumentSummary } from "../api/googleSummary";
import mammoth from "mammoth";
import { generateCoverImg } from "../api/imgGeneration";
import SummaryResult from "../components/SummaryResult";


export const action = async ({ request }) => {
    const formData = await request.formData();
    const length = formData.get('length') || 50;
    const generateCover = formData.get('generateCover');
    const file = formData.get('file');

    let generatedCover = ''

    if (!file || file.size === 0) {
        return { error: "Please upload a file", success: false };
    }

    const allowedTypes = [
        'application/pdf',
        'text/plain',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
        'application/msword' // .doc
    ];

    if (!allowedTypes.includes(file.type)) {
        return { error: "Invalid file type. Please upload a PDF, Word document, or text file.", success: false };
    }

    let summaryPayload = { length };

    if (file.type === 'application/pdf') {
        const uploadedData = await file.arrayBuffer();
        const buffer = Buffer.from(uploadedData);
        const base64 = buffer.toString('base64');
        summaryPayload.base64 = base64;
        summaryPayload.mimeType = 'application/pdf';
    }
    else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        summaryPayload.text = result.value;
    }
    else {
        summaryPayload.text = await file.text();
    }

    const summaryData = await getDocumentSummary(summaryPayload);

    if (generateCover) {
        try {
            const prompt = {
                inputs: `minimalist, editorial style illustration for an article titled "${summaryData.title}". abstract, modern, clean lines, high quality, 4k.`,
            }
            const response = await generateCoverImg(prompt);
            if (response.status !== 200) {
                throw new Error(response.data);
            }
            generatedCover = response.data;
        }
        catch (error) {
            return {
                success: false,
                error: error.message
            }
        }
    }

    return {
        success: true,
        error: false,
        ...summaryData,
        source: file.name,
        coverImg: generatedCover
    }
}

export const loader = () => {
    console.log('loader')
}

export default function Documents() {
    const [length, setLength] = useState(50);
    const [wordsCount, setWordsCount] = useState(0);
    const [summarisedWordsCount, setSummarisedWordsCount] = useState(0);
    const [summariseMode, setSummariseMode] = useState('url');
    const [generateCover, setGenerateCover] = useState(true);

    return (
        <div className="w-full h-full flex flex-col font-sans">
            <header className="flex justify-between items-center mb-3">
                <div>
                    <h1 className="text-xl font-bold text-gray-800">Summary document</h1>
                    <p className="text-gray-500 mt-1">Explore content more deeply and effectively.</p>
                </div>
            </header>

            <div className="w-full flex-1 min-h-0 flex gap-6">
                {/* Left Sidebar - History */}
                <HistorySide />

                {/* Right Content */}
                <div className="flex-1 flex flex-col gap-3 overflow-hidden">
                    {/* Top Card - Input */}
                    <Form method="post" encType="multipart/form-data" className="w-full h-1/2 bg-white border border-gray-200 rounded-3xl p-3 shadow-sm shrink-0">
                        <input type="hidden" name="length" value={length} />
                        <input type="hidden" name="generateCover" value={generateCover} />
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
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
                            <input type="file" className="hidden" id="file" />
                            <label htmlFor="file" className="w-1/2 mx-auto bg-orange-500 text-white px-8 py-3 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-orange-600 transition-colors cursor-pointer">
                                <i className="fa-solid fa-file"></i>
                                Upload document
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-lg text-xs font-bold text-gray-500">{wordsCount} words</span>
                            <button className="bg-black text-white px-8 py-3 rounded-full font-bold flex items-center gap-3 hover:bg-gray-800 transition-colors shadow-lg shadow-black/20 cursor-pointer">
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