import { FunctionComponent } from "react"
import {Routes, Route} from 'react-router-dom'
import Home from "../pages/home/home"
import Search from "../pages/search/search"
import Favorites from "../pages/favorites/favorites"


const Routing: FunctionComponent = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/search'} element={<Search />} />
      <Route path={'/favorites'} element={<Favorites />} />
    </Routes>
  )
}

export default Routing