

// create Private Guard

import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";



const PrivateGuard = () => {

    const {user} = useSelector(state => state.auth);

   if (user) {
    return <Outlet/>
   }else{
    return <Outlet/>
   }

 
}

export default PrivateGuard

// return <Navigate to='/login'/>