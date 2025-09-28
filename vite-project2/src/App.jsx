import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TopBar } from "./Components/TopBar";
import { MainPage } from "./Components/MainPage";
import { ScanPage } from "./Components/ScanPage";  

function App() {
  return <div>
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/scan" element={<ScanPage />} />
      </Routes>
    </Router>
  </div>
  
}

export default App;
