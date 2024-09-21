import { useLocation, useNavigate } from "react-router-dom"
import './session.css'
import Form from "../../components/form/Form"
import logo from "../../assets/logo-transparent.png"
import sanitizeInput from "../../utils/sanitizeData"
import { addStorage, getStorage } from "../../service/storage"
import useUser from "../../hooks/useUser"
const Session = () => {
  const location = useLocation()
  const text = location.pathname ==="/login"  ? "Sign In" : "Sign Up"
  const inputsArray =location.pathname ==="/login"  ? ["email","password"] : ["email","password","password"]
  const navigator = useNavigate()
  const {loginUser} = useUser()
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
    loginUser({email,userId:userFinded.userId})
    navigator('/')
    
  }

  function handleClickSubmitRegister(e:React.MouseEvent<HTMLFormElement>){
    e.preventDefault()
    const inputs:NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>(".form-container__input")
    const email = sanitizeInput( inputs[0].value).trim()
    const password = sanitizeInput( inputs[1].value).trim()
    const newPassword = sanitizeInput( inputs[2].value).trim()
    
    if(password !== "" && password === newPassword){
      addStorage('users',{email,password,userId:crypto.randomUUID()})
      navigator('/login')
    }
  }
  function handleLogoClick(){
    navigator('/')
  }
  const handleFuntion =  location.pathname ==="/login"  ? handleClickSubmitLogin : handleClickSubmitRegister

  return (
    <div className="session-main-container">
        <img onClick={handleLogoClick} className="session-main-container__logo" src={logo} alt="Logo" />
        <div className="session-container"></div>
        <div className="session-container__main session-main">
                <h1 className="session-main__header">{text}</h1>
                <Form handleSubmit={handleFuntion} text={text} inputs={inputsArray}/>
        </div>
    
    </div>
    
  )
}

export default Session
