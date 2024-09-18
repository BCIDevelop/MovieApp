import "./card.css"
import time from "../../assets/time.svg"
import star from "../../assets/star.svg"
import play from "../../assets/play.svg"
import image from "../../assets/cardImage.png"
import Chip from "../chip/Chip"
const Card = ({isTrending=false}:{isTrending?:boolean}) => {
  return (
    <div className={isTrending?'card-container card-trend':'card-container'}>
      
      <figure className={isTrending?"card-container__figure figure-card-trending":"card-container__figure"}>
          {isTrending && 
          <>
            <div className="card-container__info-container movie-info-container">
                <div className="movie-info-container__element element-info-container">
                  <img className="element-info-container__image" src={time} alt="Time" />
                  <p className="element-info-container__text">3:12:00</p>
                </div>
                <div className="movie-info-container__element element-info-container">
                  <img src={star} alt="Star" />
                  <p className="">8.0</p>
                </div>
                
            </div> 
            <img className="figure-card-trending__image" src={play} alt="Play" />
          </>
          }
          <img className="figure-card__image" src={image} alt="Background" />
      </figure>
      <div className="card-container__bottom bottom-card">
        <p className={isTrending?"bottom-card__text bottom-card__trending":"bottom-card__text"}>Medellin</p>

        <div className="bottom-card__chips chips-container" >
            { isTrending 
            ?
            <>
             <Chip text="Action" type="trending"/>
             <Chip text="Comedy" type="trending"/>
            </>
            :
             <>
             <Chip text="HD" type="HD"/>
             <div className="chips-container__timestamp timestamp-container">
               <img className="timestamp-container__image" src={time} alt="Time" />
               <p className="timestamp-container__text">3:12:00</p>
             </div>
             </>
            }
           
        </div>
      </div>
    </div>
  )
}

export default Card
