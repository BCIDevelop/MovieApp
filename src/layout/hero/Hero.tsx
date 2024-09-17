import Chip from "../../components/chip/Chip"
import calendar from "../../assets/calendar.svg"
import star from "../../assets/star.svg"
import time from "../../assets/time.svg"
import play from "../../assets/play.svg"
import clock from "../../assets/clock.svg"
import "./hero.css"
import { useState } from "react"
import backgorund from '../../assets/background.png'
const Hero = () => {
/* Basic Toggle state */
const [watchNow,setWatchNow] = useState(true)
function handleClick(e:React.MouseEvent<HTMLButtonElement>){
  const buttonName = e.currentTarget.getAttribute("name")
  setWatchNow(buttonName === "now")
}
  return (
    <div className="hero-container">
      <img className="hero-container__background" src={backgorund} alt="Background" />
      <div className="hero-container__buttons buttons-container">
        <button name="now" onClick={handleClick} className={watchNow?"buttons-container__now button-hero button-hero--active":"buttons-container__now button-hero"}>
            <p className="button-hero__text">Watch Now</p>
            <img className="button-hero__play" src={play} alt="Play" />
        </button>
        <button name="latter" onClick={handleClick} className={!watchNow?"buttons-container__now button-hero button-hero--active":"buttons-container__now button-hero"}>
           <p className="button-hero__text">Watch Later</p>
           <img className="button-hero__clock" src={clock} alt="Clock" />
        </button>
      </div>
      <div className="hero-container__description description-container" >
        <h1 className="description-container__header">Avatar: The Way of Water</h1>
        <div className="description-container__info info_container">

        <ul className="info_container__lists desciption-lists">
        <li className="desciption-lists_element"><Chip text="Action" type="hero"/></li>
        <li className="desciption-lists_element"><Chip text="Comedy" type="hero"/></li>

          
        </ul>
        <div className="info_container__date element_info">
          <img className="date_info__image" src={calendar} alt="Calendar" />
          <p className="date_info__date">2022</p>
        </div>
        <div className="info_container__time element_info">
          <img className="date_info__image" src={time} alt="Calendar" />
          <p className="date_info__date">3:12:00</p>
        </div>
        <div className="info_container__star element_info">
          <img className="date_info__image" src={star} alt="Calendar" />
          <p className="date_info__date">8.5</p>
        </div>
        </div>
        <p className="description-container__text">
        Set more than a decade after the events of the first film, learn the story of the 
        Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.
        </p>

      </div>
      <div className="hero-container__carrousel carrousel-hero">
          <div className="carrousel-hero__element"></div>
          <div className="carrousel-hero__element"></div>
          <div className="carrousel-hero__element"></div>
          <div className="carrousel-hero__element"></div>
          <div className="carrousel-hero__element"></div>
      </div>
    </div>
  )
}

export default Hero
