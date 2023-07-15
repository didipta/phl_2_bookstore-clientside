/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useEffect } from "react";
import { useAppSelector } from "../redux/hook";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Privateroute = ({children}:IProps) => {
    const { currentUser,isLoading} = useAppSelector((state) => state.currentuser)
    const { pathname } = useLocation();
 
    if (isLoading) {
        return <div>Loading...</div>;
      }

      if (!currentUser) {
        return <Navigate to="/signin" state={{ path: pathname }} />;
      }
    
      return children;
};

export default Privateroute;