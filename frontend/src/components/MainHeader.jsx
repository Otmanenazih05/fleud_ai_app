import { NavLink } from "react-router-dom"



export default function MainHeader(){
    return (
        <header className="h-15 mt-5 overflow-hidden flex items-center justify-between">
            <div className="flex items-center justify-between w-1/2">
                <div className="logo flex items-center justify-start">
                    <img className="w-30" src="/fleud_logo.png" alt="logo" />
                </div>
                <nav className="nav flex items-center justify-end gap-5">
                    <NavLink to="/" 
                        className={'font-semibold px-4 py-1 rounded-2xl cursor-pointer border border-black bg-white hover:bg-white hover:text-black'}>
                            Home
                    </NavLink>
                    <NavLink to="/platform" 
                        className={'font-semibold px-4 py-1 rounded-2xl cursor-pointer border border-black hover:bg-white hover:text-black'}>
                            Platform
                    </NavLink>
                    <NavLink to="/contact" 
                        className={'font-semibold px-4 py-1 rounded-2xl cursor-pointer border border-black hover:bg-white hover:text-black'}>
                            Contact us
                    </NavLink>
                </nav>
            </div>
            <div className="connection flex items-center justify-end gap-5">
                <button className="bg-white border-black border font-semibold px-5 py-2 rounded-2xl cursor-pointer">Sign in</button>
                <button className="bg-black text-white font-semibold px-5 py-2 rounded-2xl cursor-pointer">Get started</button>
            </div>
        </header>
    )
}