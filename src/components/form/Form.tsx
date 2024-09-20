import './form.css'
import { Link } from 'react-router-dom'
const Form = ({handleSubmit,text,inputs}:{handleSubmit:(e:React.MouseEvent<HTMLFormElement>)=>void,text:string,inputs:string[]}) => {
 
  return (
    <form onSubmit={(e:React.MouseEvent<HTMLFormElement>)=> handleSubmit(e)} className="form-container">
        {inputs.map((element,index)=>{
          return <input key={`input${element}${index}`} className='form-container__input' type={element} placeholder={element} />
        })}
        <button className='form-container__button' type="submit">{text}</button>
        {text ==="Sign In"
         ?
          <p className='form-container__paragraph'> New here? <Link className='form-container__link' to="/register"> Sign Up</Link></p>
         :
         <p className='form-container__paragraph'> Have account? <Link className='form-container__link' to="/login">Sign In</Link> </p>
        }
    </form>
  )
}

export default Form
