import { Children, useEffect } from "react"
import { useNavigate } from "react-router-dom"




export const WithoutLogin = ({ children }) => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("auth")
        if (token) {
            navigate('/shop-bill-management/customer-details')

        }
    }, [navigate])
    return (
        <>
            {children}
        </>


    )
}