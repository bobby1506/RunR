import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/home.jsx";
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";
import Dealership from "./screens/dealership.jsx";
import TestDerive from "./screens/book-ride.jsx";
import Blog from "./screens/blog.jsx";
import BackToTopButton from "./components/backtobutton.jsx";
import SwappingSquaresSpinner from "./screens/loader.jsx";
import About from "./components/Aboutnew/aboutnew.jsx";
import FloatingIcon from "./components/FloatingIcon/floatingicon.jsx";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);
  



  return (
    <Router>
      {showSplash ? (
        <SwappingSquaresSpinner />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dealer" element={<Dealership />} />
            <Route path="/testdrive" element={<TestDerive />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <FloatingIcon/>
          {showSplash ? (
            <SwappingSquaresSpinner />
          ) : (
            <>
            <FooterConditionally/>
              
            </>
          )}
        </>
      )}
      <BackToTopButton />
    </Router>
  );
};

const FooterConditionally=()=>{
  const location=useLocation();

  if(location.pathname=="/dealer" || location.pathname=="/testdrive" || location.pathname=="/about"){
    return null;
  }

  return <Footer/>

}

export default App;
