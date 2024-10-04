import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Auth = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("auth");
            if (!token) {
                navigate("/");
            } else {
                navigate("/shop-bill-management/customer-details");
            }
        };

        // Check authentication on initial render
        checkAuth();

        // Set up event listener for storage changes
        window.addEventListener("storage", checkAuth);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("storage", checkAuth);
        };
    }, [navigate]);

    return <>{children}</>;
};
