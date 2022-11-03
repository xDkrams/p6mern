import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & components
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import IncomingSummary from "./pages/incomingSummary";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/summary" element={<IncomingSummary />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
