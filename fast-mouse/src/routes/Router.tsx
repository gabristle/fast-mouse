import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Room from "../pages/Room"

function Router() {
    return (
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/room' element={<Room/>}></Route>
      </Routes>
    )
  }
  
  export default Router