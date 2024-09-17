
import "./chip.css"
const Chip = ({type,text}:{type:string,text:string}) => {
  let classString
  if(type==="hero") classString= "chip-container white-chip"
  else if(type==="trending") classString = "chip-container red-chip "
  else classString = "chip-container red-chip release-chip"
  return (
    <div className={classString}>
      {text}
    </div>
  )
}

export default Chip
