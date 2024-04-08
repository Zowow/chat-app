import { useState } from "react";
import {useAuthContext} from "./useContexts/useAuthContext"
import toast from "react-hot-toast"

export const useLogin = () => {
    const { dispatch } = useAuthContext();
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    

    const login = async (username, password) => {
        setIsLoading(true);
        setError(null)

        const response = await fetch("/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });

        const userData = await response.json();

        if(!response.ok){
            setError(userData.error)
            setIsLoading(false)
            toast.error(userData.error)
        }

        if(response.ok){
            localStorage.setItem('user', JSON.stringify(userData));
            dispatch({type: 'LOGIN', payload: userData})
        }
    }

    return ({login, error, isLoading})
}
