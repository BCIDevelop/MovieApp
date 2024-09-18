import Hero from "../../layout/hero/Hero"
import Recommended from "../../layout/recommended/Recommended"
import Release from "../../layout/releases/Release"
import Trending from "../../layout/trending/Trending"
import Updated from "../../layout/updated/Updated"
import "./home.css"
const Home = () => {
  return (
    <>
        <Hero/>
        <main className="home-container-main">

        <Updated/>
        <Trending/>
        <Release type="Movies"/>
        <Release type ="Series"/>
        <Recommended/>
        </main>
    </>
  )
}

export default Home
