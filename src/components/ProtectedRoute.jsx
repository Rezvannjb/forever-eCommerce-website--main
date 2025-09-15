import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function ProtectedRoute({ children, isAuthenticated }) {
   const location = useLocation();
  const handleError = () => {
    toast.error("لطفا برای ادامه خرید وارد شوید");
  };
  if (!isAuthenticated) {
    handleError();
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default ProtectedRoute;
