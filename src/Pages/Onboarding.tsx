import { RedirectToSignIn } from "@neondatabase/neon-js/auth/react";
import {useAuth} from "../context/AuthContext.tsx";


export default function  Onboarding (){
    const {user} = useAuth()

    if(!user){
        return <RedirectToSignIn />
    }
    return<div>Onboarding Page</div>
}