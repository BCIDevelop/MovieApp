import { BrowserRouter,Route,Routes } from "react-router-dom"
import Layout from "../Layout"
import Home from "../views/home/Home"
import Session from "../views/session/Session"

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Session/>}></Route>
            <Route path="/register" element={<Session/>}></Route>
            <></>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
