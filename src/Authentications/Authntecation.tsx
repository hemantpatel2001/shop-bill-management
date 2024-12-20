import { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

// Define the types for props
type AuthProps = {
  children: ReactNode; // The type for children can be any valid React node
};

export const Auth = ({ children }: AuthProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("auth");
      if (!token) {
        navigate("/"); // Redirect to login page if no auth token
      }
    };

    // Check authentication on initial render
    checkAuth();

    // Set up event listener for storage changes (e.g., logout in another tab)
    window.addEventListener("storage", checkAuth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, [navigate]); // `navigate` added as a dependency

  return <>{children}</>; // Render children if authenticated
};

export default Auth;
