import { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
type AuthProps = {
  children: ReactNode;
};

export const Auth = ({ children }: AuthProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("auth");
      if (!token) {
        navigate("/");
      }
    };
    checkAuth();

    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, [navigate]);
  return <>{children}</>;
};

export default Auth;
