import { BrowserRouter,Route,Routes } from "react-router-dom"
import Layout from "../Layout"
import PublicGuard from "../guard/PublicGuard"
import React from "react"

const Home = React.lazy(() => import("../views/home/Home"));
const Session = React.lazy(() => import("../views/session/Session"));

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route element={<PublicGuard></PublicGuard>}>
            <Route path="/login" element={<Session/>}></Route>
            <Route path="/register" element={<Session/>}></Route>
          </Route>
          <Route path="/" element={<Home/>}></Route>
            
            <></>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
