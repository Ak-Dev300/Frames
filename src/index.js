import ReactDOM from "react-dom"
import App from "./App"
import { GalleryContextProvider } from "./ContextProvider"
import {BrowserRouter as Router } from "react-router-dom"


ReactDOM.render(
  <GalleryContextProvider>
    <Router>
      <App />
    </Router>
  </GalleryContextProvider>
  , document.getElementById("root"))