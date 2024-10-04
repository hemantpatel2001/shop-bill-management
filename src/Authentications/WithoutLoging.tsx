
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const WithOutLogin = ({ children }) => {
    const navigate = useNavigate()
    useEffect(() => {

        const token = localStorage.getItem("auth")

        if (token) {

            navigate("/layout")
            window.location.reload();
        }
    },[] )

    return (
        <>
        {children}
        </>
    )
}

export default WithOutLogin
