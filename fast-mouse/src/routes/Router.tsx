import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Room from "../pages/Room"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"
import { useState } from "react"
import { Socket } from "socket.io-client"

function Router() {
  const [socket, setSocket] = useState<Socket | undefined>(undefined)

    return (
      <Routes>
        <Route element={<PrivateRoutes/>}>
        {socket &&
          <Route path='/room' element={<Room socket={socket}/>}></Route>
        }
        </Route>
        <Route element={<PublicRoutes/>}>
          <Route path='/' element={<Home setSocket={setSocket}/>}></Route>
        </Route>
      </Routes>
    )
}

/*const RoomWrapper: React.FC<{ userId: string, socket: Socket}> = ({ userId, socket }) => {
  const { code } = useParams<{ code: string }>();
  return <Room userId={userId} socket={socket}/>;
}*/
  
export default Router