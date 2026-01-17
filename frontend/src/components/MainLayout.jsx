import MainHeader from "./MainHeader"
import { Outlet } from "react-router-dom"
import {motion} from "motion/react"

export default function MainLayout(){
    return(
        <div className="main-layout relative w-full min-h-screen px-10 overflow-hidden bg-gray-50">
            <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '150px 150px'
                }}
            />
            <motion.div
                className="absolute top-1/2 -left-40 -translate-y-1/2"
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: '20%', opacity: 0.8 }}
                transition={{
                duration: 2,
                ease: [0.25, 0.1, 0.25, 1],
                opacity: { duration: 1.5 }
                }}
            >
                <div 
                className="bg-orange-700"
                style={{
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    filter: 'blur(20px)'
                }}
                />
            </motion.div>
            <MainHeader />
            <Outlet />
        </div>
    )
}