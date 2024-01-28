import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BubbleChart from "./page/Dashboard/BubbleChart/BubbleChart"
import Dashboard from "./page/Dashboard/Dashboard"
import Overview from "./page/Overview/Overview"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Overview />} />
        <Route exact path='/dashboard' element={< Dashboard />} />
      </Routes>
      {/* <BubbleChart /> */}
    </BrowserRouter>
  );
}

export default App;