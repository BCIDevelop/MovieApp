import Chip from "../../components/chip/Chip"
import calendar from "../../assets/calendar.svg"
import star from "../../assets/star.svg"
import time from "../../assets/time.svg"
import play from "../../assets/play.svg"
import clock from "../../assets/clock.svg"
import "./hero.css"
import { useEffect, useRef, useState } from "react"
import { makeRequest } from "../../service/request"
import { Genre, Movie } from "../../types/movie.type"
import { formatRunTime } from "../../utils/formatData"
const Hero = () => {
/* Basic Toggle state */
const [watchNow,setWatchNow] = useState(true)
const [actualHeroMovie,setActualHeroMovie] = useState<Movie>()
const moviesActualRef = useRef([])
const indexRef = useRef(0)
function handleClick(e:React.MouseEvent<HTMLButtonElement>){
  const buttonName = e.currentTarget.getAttribute("name")
  setWatchNow(buttonName === "now")
}

async function getPlayingMovies(){
  try {
    const dataMovies = await makeRequest('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1')
    const newMovies = dataMovies.results.map((element:Movie)=>{
      const actualMovie:Movie = {
        backdrop_path:element.backdrop_path,
        title:element.title,
        vote_average:element.vote_average,
        overview:element.overview,
        id: element.id,
        release_date:element.release_date,
        genres:[],
        runtime:"",
      }
      return actualMovie
    })
    
    moviesActualRef.current = newMovies
    setActualHeroMovie(newMovies[0])
  }
  catch (error) {
    console.log(error)
  }
}

async function getMovieId(movieId?:number){
  try {
    const movieDetails = await makeRequest(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`)
    const genres:Genre[] = movieDetails.genres.slice(0,2)
    
    setActualHeroMovie((prev)=>{
      if(!prev) return
      return { ...prev, genres:genres,runtime: formatRunTime(movieDetails.runtime) }
    })
  } catch (error) {
    console.log(error)
  }
  
}
function handleClickCarrousel(e:React.MouseEvent<HTMLDivElement>){
  if(e.currentTarget.classList.contains("carrousel-hero__element--active"))  return
  const bullets = document.querySelectorAll(".carrousel-hero__element")
  
  bullets.forEach((element,index)=>{
    element.classList.remove("carrousel-hero__element--active")
    if(element ===e.currentTarget) indexRef.current = index
  })
  e.currentTarget.classList.add("carrousel-hero__element--active")
  setActualHeroMovie(moviesActualRef.current[indexRef.current])
}
useEffect(()=>{
  getPlayingMovies()
},[])

useEffect(()=>{
  if(actualHeroMovie?.genres.length ===0) getMovieId(actualHeroMovie?.id)
},[actualHeroMovie])


  return (
    <div className="hero-container">
      <img className="hero-container__background" src={`https://image.tmdb.org/t/p/original${actualHeroMovie?.backdrop_path}`} alt="Background" />
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
        <h1 className="description-container__header">{actualHeroMovie?.title}</h1>
        <div className="description-container__info info_container">

        <ul className="info_container__lists desciption-lists">
          {
            actualHeroMovie?.genres.map((genre)=>{
              return <li key={genre.id} className="desciption-lists_element"><Chip text={genre.name} type="hero"/></li>
            })
          }
        

          
        </ul>
        <div className="info_container__date element_info">
          <img className="date_info__image" src={calendar} alt="Calendar" />
          <p className="date_info__date">{actualHeroMovie?new Date(actualHeroMovie.release_date).getFullYear():"Not defined"}</p>
        </div>
        <div className="info_container__time element_info">
          <img className="date_info__image" src={time} alt="Calendar" />
          <p className="date_info__date">{actualHeroMovie?.runtime}</p>
        </div>
        <div className="info_container__star element_info">
          <img className="date_info__image" src={star} alt="Calendar" />
          <p className="date_info__date">{actualHeroMovie?.vote_average}</p>
        </div>
        </div>
        <p className="description-container__text">
          {actualHeroMovie?.overview}
        </p>

      </div>
      <div className="hero-container__carrousel carrousel-hero">
        <div onClick={handleClickCarrousel} className={indexRef.current=== 0?"carrousel-hero__element  carrousel-hero__element--active":"carrousel-hero__element" }></div>
        <div onClick={handleClickCarrousel} className={indexRef.current=== 1?"carrousel-hero__element  carrousel-hero__element--active":"carrousel-hero__element" }></div>
        <div onClick={handleClickCarrousel} className={indexRef.current=== 2?"carrousel-hero__element  carrousel-hero__element--active":"carrousel-hero__element" }></div>
        <div onClick={handleClickCarrousel} className={indexRef.current=== 3?"carrousel-hero__element  carrousel-hero__element--active":"carrousel-hero__element" }></div>
        <div onClick={handleClickCarrousel} className={indexRef.current=== 4?"carrousel-hero__element  carrousel-hero__element--active":"carrousel-hero__element" }></div>
         
      </div>
    </div>
  )
}

export default Hero
