import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { SummaryContext } from "../context/SummaryContext"
import { getSummaryIconStyles } from "../utils/iconHelpers"

const TODAY_ITEMS = [
    { title: "Create and manage variables", source: "Figma.com", time: "Now" },
    { title: "Graphic Design Trends 2024", source: "Medium.com", time: "Today" },
    { title: "UX/UI Design & AI trends", source: "Medium.com", time: "Today" },
    { title: "Figma is not forever", source: "Medium.com", time: "Today" },
    { title: "Fundamentals of iconography", source: "Medium.com", time: "Today" }
];

const YESTERDAY_ITEMS = [
    { title: "Figma is not forever", source: "Medium.com", time: "2 day ago" },
    { title: "Fundamentals of iconography", source: "Medium.com", time: "4 day ago" },
    { title: "Figma is not forever", source: "Medium.com", time: "2 day ago" },
    { title: "Fundamentals of iconography", source: "Medium.com", time: "4 day ago" }
];

const OLD_ITEMS = [
    { title: "Figma is not forever", source: "Medium.com", time: "2 day ago" },
    { title: "Fundamentals of iconography", source: "Medium.com", time: "4 day ago" },
    { title: "Figma is not forever", source: "Medium.com", time: "2 day ago" },
    { title: "Fundamentals of iconography", source: "Medium.com", time: "4 day ago" }
];

export default function HistorySide() {

    const { summaryExpand } = useContext(SummaryContext)

    return (
        <aside className="w-[350px] bg-white border border-gray-200 rounded-3xl flex flex-col overflow-scroll shadow-sm" style={{ display: summaryExpand ? 'none' : 'block' }}>
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

            <div className="flex-1 flex flex-col max-h-0">
                {/* Today Section */}
                <div className="history flex-1 flex flex-col max-h-[calc(100vh/4)]">
                    <h4 className="px-6 pt-4 pb-2 text-sm font-semibold text-gray-500">Today</h4>
                    <div className="px-4 flex-1 overflow-y-auto flex flex-col gap-3 pb-2 min-h-0">
                        {TODAY_ITEMS.map((item, index) => {
                            const { containerClass, iconClass } = getSummaryIconStyles(item.title, item.source);
                            return (
                                <NavLink key={index} to="/article" className="shrink-0 flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group">
                                    <div className="flex items-center gap-3">
                                        <div className={containerClass}>
                                            <i className={iconClass}></i>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-bold text-gray-800 text-sm line-clamp-1">{item.title}</p>
                                            <p className="text-gray-400 text-xs mt-0.5">{item.source} • {item.time}</p>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors">
                                        <i className="fa-solid fa-arrow-right text-xs"></i>
                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>
                </div>

                {/* Yesterday Section */}
                <div className="history flex-1 flex flex-col max-h-[calc(100vh/4)] border-t border-gray-100">
                    <h4 className="px-6 pt-4 pb-2 text-sm font-semibold text-gray-500">Yesterday</h4>
                    <div className="px-4 flex-1 overflow-y-auto flex flex-col gap-3 pb-4 min-h-0">
                        {YESTERDAY_ITEMS.map((item, index) => {
                            const { containerClass, iconClass } = getSummaryIconStyles(item.title, item.source);
                            return (
                                <NavLink key={index} to="/article" className="shrink-0 flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group">
                                    <div className="flex items-center gap-3">
                                        <div className={containerClass}>
                                            <i className={iconClass}></i>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-bold text-gray-800 text-sm line-clamp-1">{item.title}</p>
                                            <p className="text-gray-400 text-xs mt-0.5">{item.source} • {item.time}</p>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors">
                                        <i className="fa-solid fa-arrow-right text-xs"></i>
                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>
                </div>

                {/* Old Section */}
                <div className="history flex-1 flex flex-col max-h-[calc(100vh/4)] border-t border-gray-100">
                    <h4 className="px-6 pt-4 pb-2 text-sm font-semibold text-gray-500">Old</h4>
                    <div className="px-4 flex-1 overflow-y-auto flex flex-col gap-3 pb-4 min-h-0">
                        {OLD_ITEMS.map((item, index) => {
                            const { containerClass, iconClass } = getSummaryIconStyles(item.title, item.source);
                            return (
                                <NavLink key={index} to="/article" className="shrink-0 flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group">
                                    <div className="flex items-center gap-3">
                                        <div className={containerClass}>
                                            <i className={iconClass}></i>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-bold text-gray-800 text-sm line-clamp-1">{item.title}</p>
                                            <p className="text-gray-400 text-xs mt-0.5">{item.source} • {item.time}</p>
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors">
                                        <i className="fa-solid fa-arrow-right text-xs"></i>
                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>
                </div>
            </div>
        </aside>
    )
}