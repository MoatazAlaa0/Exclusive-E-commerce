import React from 'react'
import { Navigate } from 'react-router-dom'


export default function ProtectedRoute({ children }) {

    if (localStorage.getItem("Token") == null) {
        return <Navigate to={"/Signup"} />
    }

    return (
        <>

            {children}
        </>
    )
}
