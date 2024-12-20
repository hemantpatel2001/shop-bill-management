import { useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type WithOutLoginProps = {
  children: ReactNode;
};

const WithOutLogin = ({ children }: WithOutLoginProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth");

    if (token) {
      navigate("/shop-bill-management/customer-details");
    }
  }, [navigate]);

  return <>{children}</>;
};

export default WithOutLogin;
