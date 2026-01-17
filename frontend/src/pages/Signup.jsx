import { Form, Link } from "react-router-dom"
import signup_bg1 from "../assets/signup_bg1.jpg"
import { signup } from "../api/services"
import { useGoogleLogin } from "@react-oauth/google"
import { useAuth } from "../context/AuthContext"
import { validateSignupData } from "../helpers/dataValidation"

export const action = async ({ request }) => {
    const formData = await request.formData()
    const email = formData.get("email")
    const username = formData.get("username")
    const password = formData.get("password")
    const data = { email, username, password1: password, password2: password }
    const validation = validateSignupData(data)
    console.log(data)

    if (validation == true) {
        try {
            const res = await signup(data)
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    } else {
        console.log(validation)
    }

}

export const loader = () => {
    console.log("loader")
}


export default function Signup() {
    const { googleLogin } = useAuth();

    const handleGoogleLogin = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (response) => {
            const res = await googleLogin(response.code)
            console.log(res)
        },
        onError: (error) => {
            console.log(error)
        }
    })

    return (
        <div className="w-7/8 h-[85vh] mt-10 mx-auto flex bg-gray-300 rounded-2xl">
            <div className="form-side h-full w-1/2 p-10 relative flex items-center justify-center">
                <img src="/fleud_logo.png" alt="logo" className="absolute -top-5 left-0" />
                <Form method="post" className="w-full">
                    <h1 className="text-4xl font-bold mb-1 text-orange-600">Sign Up</h1>
                    <p className="text-gray-500 mb-4">Sign up to get started</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="font-medium text-gray-700">Email</label>
                            <input
                                className="border-2 border-gray-500 rounded-lg p-2 font-bold focus:outline-none focus:ring-3 focus:ring-orange-500 focus:border-0"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="username" className="font-medium text-gray-700">Username</label>
                            <input
                                className="border-2 border-gray-500 rounded-lg p-2 font-medium focus:outline-none focus:ring-3 focus:ring-orange-500 focus:border-0"
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Choose a username"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="font-medium text-gray-700">Password</label>
                            <input
                                className="border-2 border-gray-500 rounded-lg p-2 font-medium focus:outline-none focus:ring-3 focus:ring-orange-500 focus:border-0"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Create a password"
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <button type="submit" className="bg-orange-600 cursor-pointer w-1/2 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                                Sign up
                            </button>
                            <button className="google-btn" onClick={() => handleGoogleLogin()}>
                                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
                                    <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                                    <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                                    <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                                    <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                                </svg>
                                Continue with Google
                            </button>
                        </div>
                        <p className="text-gray-500 text-center">Already have an account? <Link to="/login" className="text-orange-600 font-medium">Login</Link></p>
                    </div>
                </Form>
            </div>
            <div
                className="image-side h-full w-1/2 rounded-r-2xl relative"
                style={{
                    backgroundImage: `url(${signup_bg1})`,
                    backgroundSize: "cover", backgroundPosition: "center",
                    backgroundRepeat: "no-repeat", backgroundAttachment: "fixed"
                }}
            >
                <div
                    className="w-[90%] h-50 backdrop-blur-md rounded-xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] absolute bottom-5 left-7 transition-opacity duration-200"
                >
                    <div className="w-full h-full flex flex-col justify-between">
                        <p className="text-white text-xl font-bold drop-shadow-md">
                            "I use Fleud AI to summarize my emails, documents, videos and notes... It's so helpful!"
                        </p>
                        <div className="w-full flex items-center justify-between">
                            <div className="info">
                                <h3 className="text-white font-bold">User Name</h3>
                                <p className="text-gray-200 font-light">Role, Status</p>
                            </div>
                            <div className="">
                                <div className="stars text-white">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <div className="btns flex justify-between gap-2 mt-2">
                                    <button className="previous border-2 border-white rounded-full p-2 text-white cursor-pointer hover:bg-white hover:text-black">
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </button>
                                    <button className="next border-2 border-white rounded-full p-2 text-white cursor-pointer hover:bg-white hover:text-black">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}