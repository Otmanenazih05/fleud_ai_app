import { Outlet, NavLink } from "react-router-dom"
import React from "react"
import Profile from "./Profile"
import Settings from "./Settings"


export default function PlatformLayout() {
    const [overley, setOverley] = React.useState(false)
    const [profileView, setProfileView] = React.useState(false)
    const [settingsView, setSettingsView] = React.useState(false)

    const handleOverleyClick = (e) => {
        if (e.target === e.currentTarget) {
            setOverley(false)
            setProfileView(false)
            setSettingsView(false)
        }
    }

    return (
        <div className="w-full h-screen bg-gray-300 overflow-hidden relative">
            <div onClick={(e) => handleOverleyClick(e)}
                className={`w-full h-full absolute top-0 left-0 right-0 bottom-0 z-50 bg-black/50 flex items-center justify-end ${overley ? 'block' : 'hidden'}`}>
                {profileView && <Profile />}
                {settingsView && <Settings />}
            </div>
            <header className="w-full h-20 pr-5 flex items-center justify-between overflow-hidden mb-5">
                <div className="logo flex items-center justify-start">
                    <img className="w-30" src="/fleud_logo.png" alt="logo" />
                </div>
                <div className="search-bar w-[61%] p-2 rounded-2xl bg-white border border-black text-gray-600">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input className="ml-3 outline-0 w-4/5" type="text" placeholder="Search..." />
                </div>
                <div className="action-btn w-40 flex items-center justify-end gap-2">
                    <button className="w-10 h-10 rounded-full p-2 border-2 border-black hover:bg-black cursor-pointer hover:text-white text-center">
                        <i className="fa-solid fa-bell"></i>
                    </button>
                    <button onClick={() => (setOverley(true), setSettingsView(true))} className="w-10 h-10 rounded-full p-2 border-2 border-black hover:bg-black cursor-pointer hover:text-white text-center">
                        <i className="fa-solid fa-gear"></i>
                    </button>
                    <button onClick={() => (setOverley(true), setProfileView(true))}
                        className="w-10 h-10 rounded-full border-2 border-black cursor-pointer overflow-hidden"
                    >
                        <img className="w-full h-full object-cover" src="https://placehold.co/50x50" alt="" />
                    </button>
                </div>
            </header>

            <div className="w-full h-full flex items-start text-sm">
                <aside className="w-70 h-full p-5 flex flex-col gap-5">
                    <div className="flex flex-col gap-2 font-extrabold">
                        <h6>Main</h6>
                        <NavLink to="/platform" end className={({ isActive }) => `flex items-center gap-2 w-full p-2 rounded-lg ${isActive ? 'bg-white' : 'text-gray-500'}`}>
                            <i className="fa-solid fa-house"></i>
                            <h3>Dashboard</h3>
                        </NavLink>
                        <NavLink to="/platform/articles" className={({ isActive }) => `flex items-center gap-2 w-full p-2 rounded-lg ${isActive ? 'bg-white' : 'text-gray-500'}`}>
                            <i className="fa-solid fa-newspaper"></i>
                            <h3>Articles</h3>
                        </NavLink>
                        <NavLink to="/platform/videos" className={({ isActive }) => `flex items-center gap-2 w-full p-2 rounded-lg ${isActive ? 'bg-white' : 'text-gray-500'}`}>
                            <i className="fa-solid fa-video"></i>
                            <h3>Videos</h3>
                        </NavLink>
                        <NavLink to="/platform/documents" className={({ isActive }) => `flex items-center gap-2 w-full p-2 rounded-lg ${isActive ? 'bg-white' : 'text-gray-500'}`}>
                            <i className="fa-solid fa-file-lines"></i>
                            <h3>Documents</h3>
                        </NavLink>
                        <NavLink to="/platform/chat" className={({ isActive }) => `flex items-center gap-2 w-full p-2 rounded-lg ${isActive ? 'bg-white' : 'text-gray-500'}`}>
                            <i className="fa-solid fa-comments"></i>
                            <h3>Chat</h3>
                        </NavLink>
                    </div>
                    <div className="">
                        <h6>Products</h6>
                    </div>
                    <div className="">
                        <h6>Other</h6>
                    </div>
                </aside>

                <section className="w-full h-6/7 p-4 bg-white rounded-l-3xl">
                    <Outlet />
                </section>
            </div>
        </div>
    )
}