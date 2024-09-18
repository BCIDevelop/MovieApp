
import arrow from '../../assets/arrow.svg'
import Card from '../../components/card/Card'
import "./release.css"
const Release = ({type}:{type:string}) => {
  return (
    <div className="release-container">
       <div className="trending-container__header trending-header">
          <h3 className="trending-header__title">New Release - {type}</h3>
          <div className="trending-header__aside trending-aside">
          <p className="trending-aside__text">View all</p>
          <img className="trending-aside__image" src={arrow} alt="Arrow" />
          </div>
        </div>
        <ul className="trending-container__lists">
        <li>
          <Card/>
        </li>
        <li>
          <Card/>
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
    </div>
  )
}

export default Release
