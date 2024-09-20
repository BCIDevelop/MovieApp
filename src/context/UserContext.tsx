import { createContext, ReactNode, useState } from 'react'
import { addStorageObject, getStorage, removeStorage } from '../service/storage'
import { User, UserContextType } from '../types/user.type'

export const UserContext = createContext<UserContextType|null>(null)

export const UserContextApp = ({children}:{children: ReactNode}) => {
    const [user,setUser] = useState<User|undefined>(getStorage("user"))
    function loginUser({email,userId}:User){
        addStorageObject("user",{email,userId})
        setUser({email,userId})
    }
    function logOutUser(){
        removeStorage("user")
        setUser(undefined)
    }
    return (
        <UserContext.Provider value={{user,loginUser,logOutUser}}>
            {children}
        </UserContext.Provider>
    )
}
