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
    console.log(updatedSeries)
    const length = updatedSeries.length
    if(length-4 <= timeClickedRef.current) return
    timeClickedRef.current += 1
    const lists: HTMLElement| null = document.querySelector(".updated-lists__container")
    if(lists) lists.style.transform = `translateX(${-246*timeClickedRef.current}px)`
  }
  async function getUpdatedSeries() {
    try {
      const series = await makeRequest("https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1");
      const seriesMapped: Series[] = [];
  
      // Usamos un bucle for...of para manejar las promesas en serie
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
  
        // Esperamos a que la solicitud se complete antes de pasar al siguiente elemento
        const serieDetail = await makeRequest(`https://api.themoviedb.org/3/tv/${element.id}?language=en-US`);
        serieAdded.release_date = serieDetail.next_episode_to_air?.air_date || 'N/A';
        serieAdded.actualSeason = serieDetail.next_episode_to_air?.season_number || 'N/A';
        serieAdded.actualEpisode = serieDetail.next_episode_to_air?.episode_number || 'N/A';
  
        seriesMapped.push(serieAdded);
        console.log(seriesMapped);
      }
  
      // Ahora que todos los elementos han sido procesados, podemos actualizar el estado
      console.log(seriesMapped);
      setUpdatedSeries(seriesMapped);  // Aquí se actualiza el estado cuando todas las promesas han terminado
  
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
      <ul className="list-container-updated__lists updated-lists ">
          <div className="updated-lists__container">
            {
              updatedSeries.map((element:Series)=>{
                console.log("entre map")
                return <li key={element.id}><UpdatedCard  serie={element}/></li>
              })
            }
          </div>
         
        
       
      </ul>
      <button onClick={handleClick} className="list-container-updated__button">
        <img src={arrow} alt="arrow" />
      </button>
      </div>
      
    </div>
  )
}

export default Updated
