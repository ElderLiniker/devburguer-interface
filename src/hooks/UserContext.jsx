import {createContext, useContext, useEffect, useState } from "react";



const UseContext = createContext({})

export const UseProvider = ({children})=>{
const [userInfo, setUseInfo]= useState({})


const putUserData = (useInfo)=>{

setUseInfo(useInfo)

localStorage.setItem("devburguer: useData", JSON.stringify(useInfo))
}


const logout = ()=>{


    setUseInfo({})
localStorage.removeItem("devburguer: useData")

}

useEffect(()=>{

const userInfolocalstorage = localStorage.getItem("devburguer: useData")

if(!userInfolocalstorage){

setUseInfo(JSON.parse(userInfolocalstorage))

}
},[])


return(
        <UseContext.Provider  value={{userInfo, putUserData, logout}}>{children}</UseContext.Provider>

)

}


export const userUser = ()=> {
const context =  useContext(UseContext)


if(!context){
    throw new console.error("useUser Must be a valid context");
    
}

return context

}