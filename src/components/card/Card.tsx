import "./card.css"
import time from "../../assets/time.svg"
import star from "../../assets/star.svg"
import { Movie } from "../../types/movie.type"
import { Series } from "../../types/series.type"
import Chip from "../chip/Chip"


type CardProps<T> = {
  isTrending?: boolean;
  mediaElement: T;
};
const Card = <T extends Movie|Series>({isTrending=false,mediaElement}: CardProps<T>) => {
  
  return (
    <div className={isTrending?'card-container card-trend':'card-container'}>
      
      <figure className={isTrending?"card-container__figure figure-card-trending":"card-container__figure"}>
          {isTrending && 
          <>
            <div className="card-container__info-container movie-info-container">
                <div className="movie-info-container__element element-info-container">
                  <img className="element-info-container__image" src={time} alt="Time" />
                  <p className="element-info-container__text">{mediaElement.runtime}</p>
                </div>
                <div className="movie-info-container__element element-info-container">
                  <img src={star} alt="Star" />
                  <p className="">{mediaElement.vote_average}</p>
                </div>
            </div> 
          </>
          }
          {isTrending ?<iframe className="figure-card__image" src={`https://www.youtube.com/embed/${mediaElement.videoKey}`}></iframe>:<img className="figure-card__image" src={`https://image.tmdb.org/t/p/original${mediaElement.poster_path}`} alt="Background" />}
      </figure>
      <div className="card-container__bottom bottom-card">
        <p className={isTrending?"bottom-card__text bottom-card__trending":"bottom-card__text"}>{mediaElement.title}</p>

        <div className="bottom-card__chips chips-container" >
            { isTrending 
            ?
            <>
              {
                mediaElement.genres.map((element)=>{
                  return <Chip key={element.id} text={element.name} type="trending"/>
                })
              }
            </>
            :
             <>
             <Chip text="HD" type="HD"/>
             <div className="chips-container__timestamp timestamp-container">
               {mediaElement.runtime.slice(0,5)==="Season" && <img className="timestamp-container__image" src={time} alt="Time" /> }
               <p className="timestamp-container__text">{mediaElement.runtime}</p>
             </div>
             </>
            }
           
        </div>
      </div>
    </div>
  )
}

export default Card
