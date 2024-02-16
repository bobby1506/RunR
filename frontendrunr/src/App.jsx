import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home.jsx";
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";
import Dealership from "./screens/dealership.jsx";
import TestDerive from "./screens/book-ride.jsx";
import Blog from "./screens/blog.jsx";
import BackToTopButton from "./components/backtobutton.jsx";
import SwappingSquaresSpinner from "./screens/loader.jsx";

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
          </Routes>

          {/* Conditionally render Footer or LoadingScreen */}
          {showSplash ? (
            <SwappingSquaresSpinner />
          ) : (
            <>
              {/* <Footer /> */}
              <BackToTopButton />
            </>
          )}
        </>
      )}
    </Router>
  );
};

export default App;
