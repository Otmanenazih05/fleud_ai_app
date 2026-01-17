import { NavLink } from "react-router-dom"



export default function Profile(){
    return(
        <div className="w-3/9 h-full bg-white" id="profile">
            <div className="w-full h-4/9 bg-gray-300 flex flex-col items-center justify-center gap-2">
                <div className="profile-picture w-35 h-35 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://placehold.co/120x120" alt="" />
                </div>
                <h1 className="text-2xl font-bold">User Name</h1>
                <p className="text-gray-500">useremail@gmail.com</p>
            </div>
            <div className="w-full mt-10 h-1/9 px-5 py-15 flex flex-col items-center justify-center gap-5">
                <div className="w-7/8 flex items-center justify-between">
                    <button 
                        className="w-5/6 p-2 border border-gray-700 rounded-lg flex items-center justify-start gap-2 cursor-pointer hover:bg-orange-500 hover:text-white"
                    >
                        <i className="fa-solid fa-trophy"></i>
                        Upgrade to professional
                    </button>
                    <NavLink to="/platform/" className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer border border-gray-700 hover:bg-orange-500 hover:text-white">
                        <i class="fa-solid fa-square-arrow-up-right"></i>
                    </NavLink>
                </div>
                <div className="w-7/8 flex items-center justify-between">
                    <button 
                        className="w-5/6 p-2 border border-gray-700 rounded-lg flex items-center justify-start gap-2 cursor-pointer hover:bg-orange-500 hover:text-white"
                    >
                        <i className="fa-solid fa-right-from-bracket"></i>
                        Log Out
                    </button>
                    <NavLink to="/platform/" className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer border border-gray-700 hover:bg-orange-500 hover:text-white">
                        <i class="fa-solid fa-square-arrow-up-right"></i>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}