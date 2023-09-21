import { createContext, useState } from "react";
import { galleryData } from "./gallery";

export const GalleryContext = createContext()

export const GalleryContextProvider = (props) => {
  const [pictures, setPictures] = useState(galleryData)

  function handleAll(){
    setPictures(galleryData)
  }

  function handleNature(){
    const naturesList = galleryData.filter((pic) => { return pic.tag === "nature"})
    setPictures(naturesList)
  }

  function handleBeach(){
    const beachList = galleryData.filter((pic) => pic.tag === "beach")
    setPictures(beachList)
  }

  function handleCar(){
    const carList = galleryData.filter((pic) => pic.tag === "car")
    setPictures(carList)
  }

  function handleSport(){
    const sportList = galleryData.filter((pic) => pic.tag === "sport")
    setPictures(sportList)
  }

  function handleOnDragEnd(result) {
    if (!result.destination) {
        return; // Dragged outside the droppable area
    }

    const items = Array.from(pictures);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPictures(items);

  }

  console.log(pictures)

  const contextValue = {handleNature, handleBeach, handleAll, handleCar, handleSport, handleOnDragEnd, pictures }
  return(
    <GalleryContext.Provider value={contextValue}>
      {props.children}
    </GalleryContext.Provider>
  )
}