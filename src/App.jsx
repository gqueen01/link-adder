import { Routes, Route } from "react-router";
import Navbar from "./components/navbar";
import ProfileDetails from "./components/personalInformation/profileDetails";
import LinkCustomize from "./components/linkCustomize";
import PrevewPage from "./components/preveiwPage";

function App() {

  return(
    <>
      <Routes>
        <Route path="/" element={<Navbar/>} style={{display: 'flex'}}>
          <Route path="/" element={<LinkCustomize/>}/>
          <Route path="/profile" element={<ProfileDetails />}/>
        </Route>
        <Route path="preview" element={<PrevewPage/>}/>
      </Routes>
    </>
  )
}

export default App