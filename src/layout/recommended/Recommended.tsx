import './recommended.css'
import arrow from '../../assets/arrow.svg'
import Card from '../../components/card/Card'
import { Genre, Movie } from '../../types/movie.type'
import { useEffect, useRef, useState } from "react"
import { formatRunTime } from '../../utils/formatData'
import { makeRequest } from '../../service/request'
import { Series } from '../../types/series.type'
import { shuffleArray } from '../../utils/shuffleArray'
const Recommended = () => {
  const [recommendedMovies,setRecommendedMovies] = useState<Movie[]|Series[]>([])
  const recommendationsRef = useRef<Movie[]|Series[]>([])

  function handleClickFilter(e:React.MouseEvent<HTMLDivElement>){
    if(e.currentTarget.classList.contains("filter-container__element--active")){
      e.currentTarget.classList.remove("filter-container__element--active")
      setRecommendedMovies(recommendationsRef.current)
      return
    }
    const filters = document.querySelectorAll(".filter-container__element")
    filters.forEach((element)=>{
      element.classList.remove("filter-container__element--active")
      if(element===e.currentTarget) element.classList.add("filter-container__element--active")
    })
    const text = e.currentTarget.textContent
    const filtered= recommendationsRef.current.filter((element)=> element.type === text)
    setRecommendedMovies(filtered)
  }

  async function getRecommendedMovies(){
      try {
        const movies =await makeRequest('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1')
        const series = await makeRequest('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1')
        const updatedMovies = movies.results.map((elements:Movie)=> {
          return {
            ...elements,type:"Movies"
          }
        })
        const results:Movie[]|Series[]  = [...updatedMovies,...series.results]
        const shuffled = shuffleArray(results)
        const moviesMapped: Movie[]|Series[] = []
        for (const element of shuffled.slice(0,8)) {
          const movieAdded:Movie|Series = {
            backdrop_path:element.backdrop_path,
            poster_path: element.poster_path,
            title: element.type==="Movies" ? element.title : element.name,
            id: element.id,
            genres: [],
            runtime: '',
            type: element.type ? element.type: "Series"
          };
          const urlDetail = element.type === "Movies"? `https://api.themoviedb.org/3/movie/${element.id}?language=en-US`: `https://api.themoviedb.org/3/tv/${element.id}?language=en-US`
          const detail = await makeRequest(urlDetail)
          const runtime = element.type === "Movies"? formatRunTime(detail.runtime): `Season ${detail.number_of_seasons}`
          if(detail.genres.find((genre:Genre)=> genre.name === "Animation" )) movieAdded.type = "Animation"
          movieAdded.runtime = runtime
          movieAdded.genres = detail.genres.slice(0,2)
          moviesMapped.push(movieAdded)
        }
        recommendationsRef.current = moviesMapped
        setRecommendedMovies(moviesMapped) 
      } catch (error) {
        console.log(error)
      }
  }
  useEffect(()=>{
    getRecommendedMovies()
  },[])

  return (
    <div className="recommended trending-container">
       <div className="trending-container__header trending-header recommended-header">
        <div className='recommended-header__container' >
          <h3 className="trending-header__title">Recommended</h3>
            <div className='recommended-header_filter filter-container'>
              <div onClick={handleClickFilter} className='filter-container__element'>
                Movies
              </div>
              <div onClick={handleClickFilter} className='filter-container__element'>
                Series
              </div>
              <div onClick={handleClickFilter} className='filter-container__element'>
                Animation
              </div>
            </div>
        </div>
          
          <div className="trending-header__aside trending-aside">
          <p className="trending-aside__text">View all</p>
          <img className="trending-aside__image" src={arrow} alt="Arrow" />
          </div>
        </div>
        <ul className="trending-container__lists recommended-list">
          {
            recommendedMovies.map((element)=>{
              return  <li key={element.id}>
                  <Card mediaElement={element}/>
                </li>
            })
          }
      </ul>
    </div>
  )
}

export default Recommended
