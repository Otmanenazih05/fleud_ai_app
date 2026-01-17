import { NavLink } from "react-router-dom"
import orangeCirclesBg from "../assets/orange-circles-bg.jpg"



export default function Dashboard(){
    return(
        <div className="w-full h-full overflow-y-scroll">
            <header className="flex justify-between items-center mb-5">
                <div>
                    <h1 className="text-3xl font-bold">Hello <span>Username</span></h1>
                    <p className="text-gray-500">Explore content more deeply and effectively.</p>
                </div>
                <button className="bg-black text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-700 transition-all">
                    <i className="fa-solid fa-wand-magic-sparkles mr-3"></i>
                    New Summary
                </button>
            </header>

            <section className="w-full flex gap-5">
                <div className="left-side w-3/5 flex flex-col gap-4">
                    <div className="summarises flex justify-between">
                        <div className="summary-card">
                            <div className="">
                                <div className="">
                                    <h3>Article</h3>
                                    <p>Article Title</p>
                                </div>
                                <NavLink to="/article">
                                    <i className="fa-solid fa-square-arrow-up-right"></i>
                                </NavLink>
                            </div>
                            <span>10</span>
                        </div>
                        <div className="summary-card">
                            <div className="">
                                <div className="">
                                    <h3>Video</h3>
                                    <p>Video Title</p>
                                </div>
                                <NavLink to="/video">
                                    <i className="fa-solid fa-square-arrow-up-right"></i>
                                </NavLink>
                            </div>
                            <span>2</span>
                        </div>
                        <div className="summary-card">
                            <div className="">
                                <div className="">
                                    <h3>Document</h3>
                                    <p>Document Title</p>
                                </div>
                                <NavLink to="/document">
                                    <i className="fa-solid fa-square-arrow-up-right"></i>
                                </NavLink>
                            </div>
                            <span>5</span>
                        </div>
                    </div>
                    <div className="message w-full h-20 p-5 rounded-2xl bg-black relative" 
                        style={{ backgroundImage: `url(${orangeCirclesBg})`, backgroundRepeat: 'no-repeat', backgroundSize: '30%' }}
                    >
                        <div className="absolute w-1/2 top-1/2 left-3/5 text-white flex items-center gap-4 -translate-y-1/2 -translate-x-1/2">
                            <p>Message Content</p>
                            <button className="bg-white text-black font-bold px-5 py-2 rounded-2xl">Try Now!</button>
                        </div>
                    </div>
                    <div className="latest w-full h-full border border-black rounded-2xl">
                        <div className="w-full flex justify-between items-center border-b border-black p-4">
                            <div className="">
                                <h3 className="inline-block font-bold">Latest Summaries</h3> <span>90 summaries</span>
                                <p className="text-sm text-gray-500">Check out your recent summaries</p>
                            </div>
                            <div className="filter flex gap-2">
                                <button>All</button>
                                <button>Article</button>
                                <button>Video</button>
                                <button>Document</button>
                            </div>
                        </div>
                        <div className="w-full p-4">
                            <div className="summary flex items-center justify-between">
                                <div className="info flex items-center gap-5">
                                    <img className="w-20 h-20 rounded-lg" src="https://placehold.co/50x50" alt="" />
                                    <div className="">
                                        <h3>Article</h3>
                                        <p>Article Title</p>
                                    </div>
                                </div>
                                <span>50%</span>
                                <div className="before-after flex items-center gap-5">
                                    <div className="before">
                                        <h1>900</h1> <span>words</span>
                                    </div>
                                    <i className="fa-solid fa-arrow-right text-orange-500"></i>
                                    <div className="after">
                                        <h1>500</h1> <span>words</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side w-2/5 flex flex-col gap-4">
                    <div className="usage h-1/2 border border-black rounded-2xl">
                        <div className="flex items-center justify-between">
                            <div className="">
                                <h3>Your usage</h3>
                                <p>Current plan: <span>Personal</span></p>
                            </div>
                            <button>
                                ...
                            </button>
                        </div>
                        
                    </div>
                    <div className="sources h-full border border-black rounded-2xl">
                        <div className="flex items-center justify-between">
                            <div className="">
                                <h3>Top sources</h3>
                                <p>List of popular sources</p>
                            </div>
                            <button>
                                ...
                            </button>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}