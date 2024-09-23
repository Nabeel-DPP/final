import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import { Home } from "./Home";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css";
import "../js/custom.js";
import "../js/chart.js";

import "../js/map.js";

// import "../js/mono.js";


 export const App = () => {
   return (
    <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="table" element={<ReactTable />} /> */}

      </Route>
    </Routes>
  </Router>
   )
 }
 