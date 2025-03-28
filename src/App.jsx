import { BrowserRouter, Route, Routes } from "react-router"
import Login from "./componants/Login"
import Navbar from "./componants/Navbar"
import UsersList from "./componants/UsersList"
import EditForm from "./componants/EditForm"
import appStore from "./utils/appStore"
import { Provider } from "react-redux"

function App() {

  return (
    <Provider store= {appStore}>
      <BrowserRouter>
       <Navbar/>
       <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<UsersList/>}/>
          <Route path="/edit" element={<EditForm/>}/>
       </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
