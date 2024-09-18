import image from "../../assets/updated.png"
import "./updatedCard.css"
const UpdatedCard = () => {
  return (
    <div className="card-updated-container">
        <img className="card-updated-container__image" src={image} alt="Image Updated" />
        <div className="card-updated-container__info updated-info">
            <h3 className="updated-info__header">The Flash</h3>
            <p className="updated-info__data">Series/S2/Ep 9</p>
            <p className="updated-info__data">11/05/23</p>
        </div>
    </div>
  )
}

export default UpdatedCard
