import { useState, useEffect } from 'react'
import { app } from '../firebase-config'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  useEffect(
    function () {
      const authToken = sessionStorage.getItem('Auth Token')
      if (authToken) {
        navigate("/Home")
      } else if (!authToken) {
        navigate("/")
      }
  },[])

  console.log(login)

  function handleChange(prop){
    setLogin((prevLogin) => {
      return(
        {
          ...prevLogin, [prop.name]: prop.value
        }
      )
    })
  }

  function handleClick(){
    try{
      const authentication = getAuth(app)

      signInWithEmailAndPassword(authentication, login.email, login.password)
        .then((response) => {
          navigate('/Home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if (error.code === 'auth/invalid-login-credentials') {
            toast.error('Please check the Password')
            alert('Password incorrect')
          }
          if (error.code === 'auth/invalid-email') {
            toast.error('Please check the Email')
            alert("Invalid Email")
          }
          // alert(error)
        })
    }catch(err){
      console.error(err)
    }
  }


  return (
    <div id='login'>
      <h3>Image Gallery</h3>
      <p id='login-info'>Please login in to your account</p>
      <form>
        <input type="email" id="input-mail" name="email" value={login.email} placeholder='Email' onChange={(e) => handleChange(e.target)}/>
        <input type="password" id='input-password' name='password' value={login.password} placeholder='Password' onChange={(e) => handleChange(e.target)} />
      </form>
      <div>
        <button onClick={handleClick} id='login-btn'>LOG IN</button>
        <p id='forgot-p' onClick={() => alert("1Password")}>Forgot password ?</p>
      </div>
    </div>
  )
}

export default Login;
