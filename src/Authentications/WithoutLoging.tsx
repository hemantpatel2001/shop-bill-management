
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const WithOutLogin = ({ children }) => {
    const navigate = useNavigate()
    useEffect(() => {

        const token = localStorage.getItem("auth")

        if (token) {

            navigate("/shop-bill-management/customer-details")
          
        }
    },[] )

    return (
        <>
        {children}
        </>
    )
}

export default WithOutLogin
