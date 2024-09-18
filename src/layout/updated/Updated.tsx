import UpdatedCard from "../../components/updatedCard/UpdatedCard"
import arrow from "../../assets/arrow.svg"
import "./updated.css"

const Updated = () => {
  return (
    <div className="updated-container">
      <h2 className="updated-container__header">Recently Updated</h2>
      <div className="updated-container__list-container list-container-updated" >
      <ul className="list-container-updated__lists updated-lists">
         <UpdatedCard/>
         <UpdatedCard/>
         <UpdatedCard/>
         <UpdatedCard/>
      </ul>
      <button className="list-container-updated__button">
        <img src={arrow} alt="arrow" />
      </button>
      </div>
      
    </div>
  )
}

export default Updated
