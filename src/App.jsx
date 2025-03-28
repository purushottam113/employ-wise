import { BrowserRouter, Route, Routes } from "react-router"
import Login from "./componants/Login"
import Navbar from "./componants/Navbar"
import UsersList from "./componants/UsersList"
import EditForm from "./componants/EditForm"

function App() {

  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<UsersList/>}/>
        <Route path="/edit" element={<EditForm/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
