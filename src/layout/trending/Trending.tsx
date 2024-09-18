import "./trending.css"
import arrow from "../../assets/arrow.svg"
import Card from "../../components/card/Card"
const Trending = () => {
  return (
    <div className="trending-container">
      <div className="trending-container__header trending-header">

      <h3 className="trending-header__title">Trending</h3>
      <div className="trending-header__aside trending-aside">
      <p className="trending-aside__text">View all</p>
      <img className="trending-aside__image" src={arrow} alt="Arrow" />
      </div>
      </div>
      <ul className="trending-container__lists">
        <li>
          <Card isTrending/>
        </li>
        <li>
          <Card isTrending/>
        </li>
        <li>
          <Card isTrending/>
        </li>
      </ul>
    </div>
  )
}

export default Trending
