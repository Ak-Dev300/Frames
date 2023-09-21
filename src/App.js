import {useEffect} from 'react'
import Login from './components/Login'
import { BrowserRouter as Router,Routes,Route,useNavigate } from 'react-router-dom'
import Home from './components/Home'
import "./index.css"

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }
  }, [])
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/Home' element={<Home />}/>
    </Routes>
  )
}

export default App
