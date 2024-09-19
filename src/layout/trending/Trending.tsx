import "./trending.css"
import arrow from "../../assets/arrow.svg"
import Card from "../../components/card/Card"
import { useEffect, useState } from "react"
import { makeRequest } from "../../service/request"
import { Movie } from "../../types/movie.type"
import { formatRunTime } from "../../utils/formatData"
const Trending = () => {
  const [trendingMovies,setTrendingMovies] = useState<Movie[]>([])
  async function getTrendingMovies(){
      try {
        const movies =await makeRequest('https://api.themoviedb.org/3/trending/movie/day?language=en-US')
        const moviesMapped: Movie[] = []
        for (const element of movies.results.slice(0,3)) {
          const movieAdded:Movie = {
            backdrop_path: element.backdrop_path,
            title: element.title,
            id: element.id,
            genres: [],
            release_date: element.release_date,
            runtime: '',
            vote_average:element.vote_average,
            overview:element.overview,
          };
        
          const movieDetail = await makeRequest(`https://api.themoviedb.org/3/movie/${element.id}?language=en-US`)
          const videoDetail = await makeRequest(`https://api.themoviedb.org/3/movie/${element.id}/videos?language=en-US`)
          movieAdded.runtime = formatRunTime(movieDetail.runtime)
          movieAdded.genres = movieDetail.genres.slice(0,2)
          const  videoTeaser =  videoDetail.results.filter((element:{key:string,type:string})=>{
              return element.type === "Teaser"
          })
          const videoTarget = videoTeaser.length > 0 ? videoTeaser[0]:videoDetail.results[0]
          movieAdded.videoKey = videoTarget.key
          moviesMapped.push(movieAdded)
        }
      setTrendingMovies(moviesMapped) 
      } catch (error) {
        console.log(error)
      }
  }
  useEffect(()=>{
    getTrendingMovies()
  },[])
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
        {trendingMovies.map((element)=>{
          return <li key={element.id}>
                     <Card<Movie>  isTrending mediaElement={element}/>
                  </li>
        })}
      </ul>
    </div>
  )
}

export default Trending
