import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

export const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}


export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setLoading(false);
        }
    }, []);

    const googleLogin = async (code) => {
        try {
            const response = await instance.post("auth/social/google/", { code: String(code) });
            setUser(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            setLoading(false);

            return { success: true, user: response.data };
        } catch (error) {
            console.error(error);
            setLoading(false);
            return { success: false, error: error.response.data };
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        setLoading(false);
    }

    return (
        <AuthContext.Provider value={{ user, loading, googleLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
