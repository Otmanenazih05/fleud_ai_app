



export default function Subscription() {
    return (
        <div className="w-full h-full flex flex-col font-sans overflow-y-auto p-2">
            <header className="flex flex-col justify-center items-start mb-8 pl-2">
                <h1 className="text-2xl font-bold text-gray-800">Pricing</h1>
                <p className="text-gray-500 mt-1 text-sm">Explore content more deeply and effectively.</p>
            </header>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start pb-10 px-2">
                {/* Personal Plan */}
                <div className="bg-white rounded-3xl p-6 border border-gray-300 flex flex-col gap-6 relative h-full">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Personal</h2>
                        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                            For Individual use with 30 summaries a month, no ads, and basic support.
                        </p>
                    </div>

                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-gray-900">$99</span>
                        <span className="text-gray-400 text-xs">/ For Ever</span>
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-gray-800 mb-3">Available modules:</p>
                        <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800">
                                <i className="fa-solid fa-code-branch"></i>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800">
                                <i className="fa-solid fa-book-open"></i>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800">
                                <i className="fa-solid fa-folder"></i>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <p className="text-xs font-medium text-gray-800 mb-4">Plan includes:</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <i className="fa-solid fa-check text-orange-500"></i>
                                30 summaries per day
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <i className="fa-solid fa-check text-orange-500"></i>
                                Enjoy an ad-free experience
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <i className="fa-solid fa-check text-orange-500"></i>
                                Get support via email
                            </li>
                        </ul>
                    </div>

                    <button className="w-full py-3 rounded-full border border-gray-800 text-gray-800 font-medium text-sm hover:bg-gray-50 transition-colors mt-auto">
                        Get Personal Plan
                    </button>
                </div>

                {/* Professional Plan (Highlighted) */}
                <div className="bg-white rounded-3xl p-6 border-2 border-orange-500 flex flex-col gap-6 relative h-full shadow-lg">
                    <div className="absolute -top-4 right-6 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Most Popular
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Professional</h2>
                        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                            Unlimited summaries, customization, quick support, and app integrations for professionals.
                        </p>
                    </div>

                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-gray-900">$199</span>
                        <span className="text-gray-400 text-xs">/ For Ever</span>
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-gray-800 mb-3">Available modules:</p>
                        <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800">
                                <i className="fa-solid fa-diagram-project"></i>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800">
                                <i className="fa-solid fa-table-columns"></i>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-orange-500 border border-orange-500 flex items-center justify-center text-white relative group">
                                <i className="fa-solid fa-file-invoice"></i>
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    Documents
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <p className="text-xs font-medium text-gray-800 mb-4">Everything in Personal, plus:</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <i className="fa-solid fa-check text-orange-500"></i>
                                Unlimited summaries
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <i className="fa-solid fa-check text-orange-500"></i>
                                Use advanced search options
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <i className="fa-solid fa-check text-orange-500"></i>
                                Save and export summaries
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <i className="fa-solid fa-check text-orange-500"></i>
                                Customize summarizing settings
                            </li>
                        </ul>
                    </div>

                    <button className="w-full py-3 rounded-full bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-colors mt-auto">
                        Buy now
                    </button>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-white rounded-3xl p-6 border border-gray-300 flex flex-col gap-6 relative h-full">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Enterprise</h2>
                        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                            Team-focused with priority support, API access, and advanced security options.
                        </p>
                    </div>

                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-gray-900">$999</span>
                        <span className="text-gray-400 text-xs">/ For Ever</span>
                    </div>

                    <div>
                        <p className="text-xs font-semibold text-gray-800 mb-3">Available modules:</p>
                        <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800">
                                <i className="fa-solid fa-network-wired"></i>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800">
                                <i className="fa-solid fa-globe"></i>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800">
                                <i className="fa-solid fa-server"></i>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-800">
                                <i className="fa-solid fa-share-nodes"></i>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <p className="text-xs font-medium text-gray-800 mb-4">Everything in Professional, plus:</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <i className="fa-solid fa-check text-orange-500"></i>
                                Multiple team accounts
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <i className="fa-solid fa-check text-orange-500"></i>
                                Premium priority support
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <i className="fa-solid fa-check text-orange-500"></i>
                                Custom training sessions
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <i className="fa-solid fa-check text-orange-500"></i>
                                Comprehensive API access
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <i className="fa-solid fa-check text-orange-500"></i>
                                Advanced security protocols
                            </li>
                        </ul>
                    </div>

                    <button className="w-full py-3 rounded-full border border-gray-800 text-gray-800 font-medium text-sm hover:bg-gray-50 transition-colors mt-auto">
                        Get Enterprise Plan
                    </button>
                </div>
            </div>
        </div>
    )
}