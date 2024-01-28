import React from 'react';
import Sidebar from "./Sidebar/Sidebar"
// import Map from "./Map/Map"
// import ModalChart from '../../components/ModalChart/ModalChart';
import Footer from "../../components/Footer/Footer"

const Overview = () => {
  return (
    <div>
        <Sidebar />
        
        {/* <ModalChart/> */}
        <Footer />
    </div>
  )
}

export default Overview