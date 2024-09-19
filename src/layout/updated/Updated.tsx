import UpdatedCard from "../../components/updatedCard/UpdatedCard"
import arrow from "../../assets/arrow.svg"
import "./updated.css"
import { useEffect, useRef, useState } from "react"
import { makeRequest } from "../../service/request"
import { Series } from "../../types/series.type"


const Updated = () => {
  const timeClickedRef = useRef(0)
  const [updatedSeries,setUpdatedSeries] = useState<Series[]>([])

  function handleClick(){
    
    const length = updatedSeries.length
    if(length-4 <= timeClickedRef.current) return
    timeClickedRef.current += 1
    const lists: HTMLElement| null = document.querySelector(".updated-lists__container")
    if(lists) lists.style.transform = `translateX(${-246*timeClickedRef.current}px)`
  }
  async function getUpdatedSeries() {
    try {
      const series = await makeRequest("https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1")
      const seriesMapped: Series[] = []

      for (const element of series.results) {
        const serieAdded = {
          poster_path: element.poster_path,
          name: element.name,
          id: element.id,
          genres: [],
          release_date: '',
          runtime: '',
          actualSeason: '',
          actualEpisode: '',
        };
        const serieDetail = await makeRequest(`https://api.themoviedb.org/3/tv/${element.id}?language=en-US`)
        serieAdded.release_date = serieDetail.next_episode_to_air?.air_date
        serieAdded.actualSeason = serieDetail.next_episode_to_air?.season_number 
        serieAdded.actualEpisode = serieDetail.next_episode_to_air?.episode_number 
        seriesMapped.push(serieAdded)

      }
      setUpdatedSeries(seriesMapped)  
  
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    getUpdatedSeries()
  },[])

  return (
    <div className="updated-container">
      <h2 className="updated-container__header">Recently Updated</h2>
      <div className="updated-container__list-container list-container-updated" >
      <div className="list-container-updated__lists updated-lists ">
          <ul className="updated-lists__container">
            {
              updatedSeries.map((element:Series)=>{
                return <li key={element.id}><UpdatedCard  serie={element}/></li>
              })
            }
          </ul>
      </div>
      <button onClick={handleClick} className="list-container-updated__button">
        <img src={arrow} alt="arrow" />
      </button>
      </div>
      
    </div>
  )
}

export default Updated
