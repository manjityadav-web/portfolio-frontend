
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AddProject from "./components/AddProject";
import { useEffect } from "react";
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminContactList from "./components/AdminContactList";
import 'aos/dist/aos.css'
import Aos from 'aos'

function App() {

  useEffect(()=>{
   Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
})

  return (
     <BrowserRouter>
        <Navbar/>
       
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>

          {/* admin  */}
          <Route path="/addProject" element={<AddProject/>}/>
          <Route path="/adminContact" element={<AdminContactList/>}/>

          <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Routes>
        <Footer/>
     </BrowserRouter>
   
  );
}

export default App;