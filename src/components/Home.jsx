import {useEffect, useContext, useState} from 'react'
import {useNavigate} from "react-router-dom"
import Navbar from './Navbar'
import { GalleryContext } from '../ContextProvider'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const Home = () => {
  const { pictures, handleOnDragEnd } = useContext(GalleryContext)
  const navigate = useNavigate()

  useEffect(

    function(){
      const authToken = sessionStorage.getItem('Auth Token')
      if (authToken) {
        navigate("/Home")
      }else if(!authToken){
        navigate("/")
      }
    }
  ,[])


  return (
    <div id='home'>
      <Navbar />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div id='showroom' className='characters' {...provided.droppableProps} ref={provided.innerRef}>
              {pictures.map((pic, index) => {
                return (
                  <Draggable key={pic.id} draggableId={String(pic.id)} index={Number(index)}>
                    {(provided) => (
                      <div id="img-div" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                        <img src={pic.img} loading='eager' alt={pic.tag}/>
                      </div>
                    )}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Home
