import { useEffect } from "react"
import { useNavigate } from "react-router-dom"



export const Auth =({children})=>{
const navigate=useNavigate()

useEffect(()=>{

    const token= localStorage.getItem("auth")

    if(!token){
        navigate("/")
    }
},[])
return(
    <>
    
    {children}
    </>
)
}