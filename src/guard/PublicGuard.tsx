
import { Navigate,Outlet } from "react-router-dom"
import useUser from "../hooks/useUser"


const PublicGuard = () => {
  const {user} = useUser()
  if(user) return <Navigate to="/"/> 
  return <Outlet></Outlet>
}

export default PublicGuard
