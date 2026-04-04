import {useAuth} from "../context/AuthContext.tsx";
import {Navigate} from "react-router-dom";

export default function  Profile (){
    const { user, isLoading } = useAuth()
    const plan = false
    if(!user && !isLoading){
        return <Navigate to="/auth/sign-in" replace/>
    }

    if(!plan){
        return <Navigate to="/oboarding" replace/>
    }
    return<div>Profile Page</div>
}