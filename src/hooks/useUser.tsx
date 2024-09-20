import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { UserContextType } from "../types/user.type"

const useUser = () => {
  const context:UserContextType|null =useContext(UserContext)
  if(!context) throw new Error("useUser must be used within a UserContextApp provider");
  const { user, loginUser }: UserContextType = context;
  return { user, loginUser };
}

export default useUser

  