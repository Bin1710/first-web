import React from "react";
import "./index.css";
import MemberCards from "./component/MembersCard/Group7900.js";
import PageDe from "./Routes/PageDe.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./component/About/index.js";
import Careers from "./component/Careers/index.js";
import Contact from "./component/Contact/index.js";
import Home from "./component/Home/index.js";
import Member from "./component/Member/index.js";
import Card from "./component/Card/card1";
import "./i18n";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/member" element={<Member />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trang-chi-tiet" element={<PageDe/>} />
        <Route path="/temp" element={<MemberCards />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
