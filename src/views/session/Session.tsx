import { useLocation, useNavigate } from "react-router-dom"
import './session.css'
import Form from "../../components/form/Form"
import logo from "../../assets/logo-transparent.png"
import sanitizeInput from "../../utils/sanitizeData"
import { addStorage, addStorageObject, getStorage } from "../../service/storage"
const Session = () => {
  const location = useLocation()
  const text = location.pathname ==="/login"  ? "Sign In" : "Sign Up"
  const inputsArray =location.pathname ==="/login"  ? ["email","password"] : ["email","password","password"]
  const navigator = useNavigate()
  function handleClickSubmitLogin(e:React.MouseEvent<HTMLFormElement>){
    e.preventDefault()
    const inputs:NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>(".form-container__input")
    const email = sanitizeInput( inputs[0].value)
    const password = sanitizeInput( inputs[1].value)
    const userDatabase = getStorage("users")
    const userFinded= userDatabase.find((element:{email:string,password:string})=> element.email === email)
    if(!userFinded) {
      console.log("TODO: handle error") 
      return 
    }
    if(password!== userFinded.password){
      console.log("TODO: handle error") 
      return 
    }
    addStorageObject("user",{email})
    navigator('/')
    
  }

  function handleClickSubmitRegister(e:React.MouseEvent<HTMLFormElement>){
    e.preventDefault()
    const inputs:NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>(".form-container__input")
    const email = sanitizeInput( inputs[0].value)
    const password = sanitizeInput( inputs[1].value)
    const newPassword = sanitizeInput( inputs[2].value)
    if(password === newPassword){
      addStorage('users',{email,password,userId:crypto.randomUUID()})
      navigator('/login')
    }
  }
  const handleFuntion =  location.pathname ==="/login"  ? handleClickSubmitLogin : handleClickSubmitRegister

  return (
    <div className="session-main-container">
        <img className="session-main-container__logo" src={logo} alt="Logo" />
        <div className="session-container"></div>
        <div className="session-container__main session-main">
                <h1 className="session-main__header">{text}</h1>
                <Form handleSubmit={handleFuntion} text={text} inputs={inputsArray}/>
        </div>
    
    </div>
    
  )
}

export default Session
