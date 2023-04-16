import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext} from './useAuthContext'

import { auth } from '../firebase';

import { signOut } from "firebase/auth";

export const useLogout = () => {
    const navigate = useNavigate()
    const { dispatch } = useAuthContext();
    
    const logout = () => {
        signOut(auth)
            .then(
                () => {
                    dispatch({ type: "LOGOUT"})
                    navigate("/")
                    console.log("user signed out")
                }
            ).catch(
                (err) => {
                    console.log(err.message)
                }
            )
    }

    return { logout }
}