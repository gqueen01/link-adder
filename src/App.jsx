import { Routes, Route } from "react-router";
import Navbar from "./components/navbar";
import ProfileDetails from "./components/personalInformation/profileDetails";
import LinkCustomize from "./components/linkCustomize";
import PrevewPage from "./components/preveiwPage";
import { useState } from "react";

function App() {
  const [dataToSent, setDataToSend] = useState({})
  const [dataLinks, setDataLinks] = useState([])

  return(
    <>
      <Routes>
        <Route path="/" element={<Navbar data={dataToSent} dataLinks={dataLinks}/>} style={{display: 'flex'}}>
          <Route path="/" element={<LinkCustomize onDataLinks={setDataLinks} />}/>
          <Route path="/profile" element={<ProfileDetails onSendData={setDataToSend} />}/>
        </Route>
        <Route path="preview" element={<PrevewPage/>}/>
      </Routes>
    </>
  )
}

export default App