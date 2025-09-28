import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TopBar } from "./Components/TopBar";
import { MainPage } from "./Components/MainPage";
import { ScanPage } from "./Components/ScanPage";  
import { About } from "./about";
import { SignupPage } from "./Components/SignupPage";
import { LoginPage } from "./Components/LoginPage";

function App() {
  return <div>
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/scan" element={<ScanPage />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/signin" element = {<LoginPage />} />
        <Route path = "/signup" element = {<SignupPage />} />
      </Routes>
    </Router>
  </div>
  
}

export default App;
