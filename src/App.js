import "./App.css";
import Aboutpage from "./Pages/Aboutpage";
import Bookdetailpage from "./Pages/Bookdetailpage.jsx";
import Bookpage from "./Pages/Bookpage";
import Contactpage from "./Pages/Contactpage";
import Errorpage from "./Pages/Errorpage";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registerpage from "./Pages/Registerpage";
import Reviewdetail from "./Pages/Reviewdetail";
import Loginpage from "./Pages/Loginpage";
import Protectedroutes from "./Pages/routes/Protectedroutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/books" element={<Protectedroutes Component = {Bookpage}/>} />
        <Route path="/books/detail/:id" element={<Bookdetailpage />} />
        <Route path="/review/:id" element={<Reviewdetail />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="*" element={<Errorpage />} />
        <Route path="/Register" element={<Registerpage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </Router>
    // <Reviewpage/>
  );
}

export default App;
