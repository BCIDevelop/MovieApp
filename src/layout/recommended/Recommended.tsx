import './recommended.css'
import arrow from '../../assets/arrow.svg'
import Card from '../../components/card/Card'
const Recommended = () => {
  return (
    <div className="trending-container recommended">
       <div className="trending-container__header trending-header recommended-header">
        <div className='recommended-header__container' >
          <h3 className="trending-header__title">Recommended</h3>
            <div className='recommended-header_filter filter-container'>
              <div className='filter-container__element filter-container__element--active'>
                Movies
              </div>
              <div className='filter-container__element'>
                Series
              </div>
              <div className='filter-container__element'>
                Animation
              </div>
            </div>
        </div>
          
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

export default Recommended
