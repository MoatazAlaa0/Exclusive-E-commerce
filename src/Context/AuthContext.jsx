import React, { createContext, useState } from 'react'

 export  const  authContext = createContext()


export default function AuthContext({ children }) {

const [Token, setToken] = useState(localStorage.getItem("Token"))

    return (
        <authContext.Provider value={{ Token , setToken}}>
            {children}

        </authContext.Provider>
    )
}
