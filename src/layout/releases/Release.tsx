
import arrow from '../../assets/arrow.svg'
import Card from '../../components/card/Card'
import "./release.css"
import { Movie } from '../../types/movie.type'
import { useEffect, useState } from "react"
import { formatRunTime } from '../../utils/formatData'
import { makeRequest } from '../../service/request'
import { Series } from '../../types/series.type'
const Release = ({type}:{type:string}) => {
  const [releaseMovies,setReleaseMovies] = useState<Movie[]|Series[]>([])
  async function getTrendingMovies(){
      try {
        const url = type === "Movies"? "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1": "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1"
        const movies =await makeRequest(url)
        const moviesMapped: Movie[]|Series[] = []
        for (const element of movies.results.slice(0,4)) {
          const movieAdded:Movie|Series = {
            backdrop_path:element.backdrop_path,
            poster_path: element.poster_path,
            title: type === "Movies"?element.title: element.name,
            id: element.id,
            genres: [],
            release_date: element.release_date,
            runtime: '',
            vote_average:element.vote_average,
            overview:element.overview,
            
          };
          
          const urlDetail = type === "Movies"? `https://api.themoviedb.org/3/movie/${element.id}?language=en-US`: `https://api.themoviedb.org/3/tv/${element.id}?language=en-US`
          const movieDetail = await makeRequest(urlDetail)
          const runtime = type === "Movies"? formatRunTime(movieDetail.runtime): `Season ${movieDetail.last_episode_to_air.season_number}`
          movieAdded.runtime = runtime
          movieAdded.genres = movieDetail.genres.slice(0,2)
          moviesMapped.push(movieAdded)
        }
        
        setReleaseMovies(moviesMapped) 
      } catch (error) {
        console.log(error)
      }
  }
  useEffect(()=>{
    getTrendingMovies()
  },[])



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
        {
            releaseMovies.map((element)=>{
              return <li key={element.id}>
              <Card mediaElement ={element}/>
            </li>
            })
        }
        
        
      </ul>
    </div>
  )
}

export default Release
