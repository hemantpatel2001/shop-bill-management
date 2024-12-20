import { useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the type for the props
type WithOutLoginProps = {
  children: ReactNode; // The type for children can be any valid React node
};

const WithOutLogin = ({ children }: WithOutLoginProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth");

    if (token) {
      navigate("/shop-bill-management/customer-details");
    }
  }, [navigate]); // Ensure `navigate` is included in the dependency array

  return <>{children}</>; // Render the children if no token is found
};

export default WithOutLogin;
