import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Contacto from "./components/pages/Contacto";
import FAQ from "./components/pages/FAQ";
import Home from "./components/pages/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/WeRemote" element={<Home/>}/>
          <Route exact path="/home" element={<Home />}/>
          <Route path="/contacto" element={ <Contacto/>}/>
          <Route path="/faq" element={ <FAQ/>}/>        
        </Routes>

        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
