
import { Series } from "../../types/series.type"
import "./updatedCard.css"
const UpdatedCard = ({serie}:{serie:Series}) => {
  return (
    <div className="card-updated-container">
        <img className="card-updated-container__image" src={`https://image.tmdb.org/t/p/original${serie.poster_path}`} alt="Image Updated" />
        <div className="card-updated-container__info updated-info">
            <h3 className="updated-info__header">{serie.name}</h3>
            <p className="updated-info__data">{`Series/S${serie.actualSeason}/Ep ${serie.actualEpisode}`}</p>
            <p className="updated-info__data">{serie.release_date}</p>
        </div>
    </div>
  )
}

export default UpdatedCard
