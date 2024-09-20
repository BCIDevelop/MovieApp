import { ReactNode } from "react"
import Header from "./layout/header/Header"
import { useLocation } from "react-router-dom"




const Layout = ({ children }:{children:ReactNode}) => {
  const location = useLocation()
  return (
    <>
    {location.pathname!=='/login' &&location.pathname!=='/register' && <Header/>}
    {children}
    </>
  )
}

export default Layout
