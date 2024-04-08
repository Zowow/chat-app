import { useAuthContext } from "./useContexts/useAuthContext"
import { useState } from "react";
import toast from "react-hot-toast"

export const useSignup = () => {
    const { dispatch } = useAuthContext();
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const signup = async (inputs) => {

        const success = handleInputErrors(inputs);
        if(!success) {
        const response = await fetch("/api/auth/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...inputs})
        });
        
        const userData = await response.json();

        if(!response.ok){
            setError(userData.error);
            setIsLoading(false);
        };

        if(response.ok){
            localStorage.setItem('user', JSON.stringify(userData));
            dispatch({type: 'LOGIN', payload: userData})
        }
    }
    }

    return {signup,error,isLoading}
}

const handleInputErrors = (inputs) => {
    if(!inputs.firstName || !inputs.lastName || !inputs.username || !inputs.password || !inputs.confirmPassword || !inputs.gender) {
        toast.error("Please fill in all the fields");
        return false;
    }
    if(inputs.password !== inputs.confirmPassword) {
        toast.error("Password do not match!");
        return false;
    }

    if(inputs.password.length < 6){
        toast.error("Password must be at least 6 characters");
        return false;
    }
}