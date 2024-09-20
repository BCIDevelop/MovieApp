import { createContext, ReactNode, useState } from 'react'
import { addStorageObject, getStorage } from '../service/storage'
import { User, UserContextType } from '../types/user.type'

export const UserContext = createContext<UserContextType|null>(null)

export const UserContextApp = ({children}:{children: ReactNode}) => {
    const [user,setUser] = useState<User>(getStorage("user"))
    function loginUser({email,userId}:User){
        addStorageObject("user",{email})
        setUser({email,userId})
    }
    return (
        <UserContext.Provider value={{user,loginUser}}>
            {children}
        </UserContext.Provider>
    )
}
