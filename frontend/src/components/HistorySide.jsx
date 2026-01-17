import { NavLink } from "react-router-dom"



export default function HistorySide(){

    return(
        <aside className="w-[350px] bg-white border border-gray-200 rounded-3xl flex flex-col overflow-hidden shadow-sm">
            <div className="w-full p-6 border-b border-gray-100 flex items-start justify-between">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-gray-800">History</h3>
                        <span className="bg-orange-100 text-orange-500 text-xs font-bold px-2 py-0.5 rounded-full">01 summaries</span>
                    </div>
                    <p className="text-gray-400 text-sm">All your Summary article</p>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 border border-gray-200 text-gray-600 transition-colors">
                    <i className="fa-solid fa-ellipsis"></i>
                </button>
            </div>

            <div className="flex-1 flex flex-col min-h-0">
                {/* Today Section */}
                <div className="flex-1 flex flex-col min-h-0">
                    <h4 className="px-6 pt-4 pb-2 text-sm font-semibold text-gray-500">Today</h4>
                    <div className="px-4 flex-1 overflow-y-auto flex flex-col gap-3 pb-2 min-h-0">
                        {/* Item 1 */}
                        <NavLink to="/article" className="shrink-0 flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-500">
                                    <i className="fa-solid fa-file-lines text-lg"></i>
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-bold text-gray-800 text-sm line-clamp-1">Create and manage variables</p>
                                    <p className="text-gray-400 text-xs mt-0.5">Figma.com • Now</p>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors">
                                <i className="fa-solid fa-arrow-right text-xs"></i>
                            </div>
                        </NavLink>

                        {/* Item 2 */}
                        <NavLink to="/article" className="shrink-0 flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-500">
                                    <i className="fa-solid fa-pen-nib text-lg"></i>
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-bold text-gray-800 text-sm line-clamp-1">Graphic Design Trends 2024</p>
                                    <p className="text-gray-400 text-xs mt-0.5">Medium.com • Today</p>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors">
                                <i className="fa-solid fa-arrow-right text-xs"></i>
                            </div>
                        </NavLink>

                        <NavLink to="/article" className="shrink-0 flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-500">
                                    <i className="fa-solid fa-layer-group text-lg"></i>
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-bold text-gray-800 text-sm line-clamp-1">UX/UI Design & AI trends</p>
                                    <p className="text-gray-400 text-xs mt-0.5">Medium.com • Today</p>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors">
                                <i className="fa-solid fa-arrow-right text-xs"></i>
                            </div>
                        </NavLink>
                    </div>
                </div>

                {/* Yesterday Section */}
                <div className="flex-1 flex flex-col min-h-0 border-t border-gray-100">
                    <h4 className="px-6 pt-4 pb-2 text-sm font-semibold text-gray-500">Yesterday</h4>
                    <div className="px-4 flex-1 overflow-y-auto flex flex-col gap-3 pb-4 min-h-0">
                        <NavLink to="/article" className="shrink-0 flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center text-lime-600">
                                    <i className="fa-solid fa-image text-lg"></i>
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-bold text-gray-800 text-sm line-clamp-1">Figma is not forever</p>
                                    <p className="text-gray-400 text-xs mt-0.5">Medium.com • 2 day ago</p>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors">
                                <i className="fa-solid fa-arrow-right text-xs"></i>
                            </div>
                        </NavLink>

                        <NavLink to="/article" className="shrink-0 flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
                                    <i className="fa-solid fa-icons text-lg"></i>
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-bold text-gray-800 text-sm line-clamp-1">Fundamentals of iconography</p>
                                    <p className="text-gray-400 text-xs mt-0.5">Medium.com • 4 day ago</p>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors">
                                <i className="fa-solid fa-arrow-right text-xs"></i>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </aside>
    )
}