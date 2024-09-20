import { BrowserRouter,Route,Routes } from "react-router-dom"
import Layout from "../Layout"
import Home from "../views/home/Home"
import Session from "../views/session/Session"
import PublicGuard from "../guard/PublicGuard"

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
