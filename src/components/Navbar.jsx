import {useContext, useState} from 'react'
import { useNavigate } from "react-router-dom"
import { GalleryContext } from '../ContextProvider'
import { List, X } from "phosphor-react"

const Navbar = () => {
  const { handleNature, handleBeach, handleAll, handleCar, handleSport } = useContext(GalleryContext)
  const navigate = useNavigate()
  const [dropMenu, setDropMenu] = useState(false)

  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    navigate('/')
  }

  function handleDrop(){
    setDropMenu((prev) => !prev)
  }

  return (
    <header>
      <nav>
        <h3 id='nav-title'>FRAMES.</h3>
        <ul id='links'>
          <li onClick={handleAll}>All</li>
          <li onClick={handleNature}>Nature</li>
          <li onClick={handleCar}>Cars</li>
          <li onClick={handleBeach}>Beach</li>
          <li onClick={handleSport}>Sports</li>
        </ul>
        <button onClick={handleLogout} id='logout-btn'>LOG OUT</button>
        <List size={27} color='grey' id='list' onClick={() => handleDrop()}/>
      </nav>
      <div id='drop-menu' style={{top: dropMenu ? "0" : "-1000px"}}>
        <div id='drop-head'>
          <h3 id='drop-title'>FRAMES.</h3>
          <X size={28} color='grey' id='x' onClick={() => handleDrop()}/>
        </div>
        <ul id='links-drop'>
          <li onClick={handleAll}>All</li>
          <li onClick={handleNature}>Nature</li>
          <li onClick={handleCar}>Cars</li>
          <li onClick={handleBeach}>Beach</li>
          <li onClick={handleSport}>Sports</li>
        </ul>
        <button onClick={handleLogout} id='logout-btn' className='logout-btn'>LOG OUT</button>
      </div>
    </header>
  )
}

export default Navbar
