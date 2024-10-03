import { useEffect } from 'preact/hooks'

import { useNavigate } from 'react-router-dom'

const WithOutLogin = ({ children }) => {
    const navigate = useNavigate()
    useEffect(() => {

        const token = localStorage.getItem("auth")

        if (token) {

            navigate("/layout")
        }
    }, [navigate])

    return (
        <>
        {children}
        </>
    )
}

export default WithOutLogin
