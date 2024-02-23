import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
  SecurityPerson,
  SecurityPersonRegister,
  SecurityPersonLogin,
  SecurityPersonDashboard,
  FlatownerHome,
  FlatownerLogin,
  FlatownerRegister,
  Admin,
  AdminLogin
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/securityperson" element={<SecurityPerson/>} />
      <Route path="/securitypersonRegister" element={<SecurityPersonRegister/>} />
      <Route path="/securitypersonLogin" element={<SecurityPersonLogin/>} />
      <Route path="/securitypersonDashboard" element={<SecurityPersonDashboard/>} />
      <Route path="/flatownerhome" element={<FlatownerHome/>} />
      <Route path="/flatownerLogin" element={<FlatownerLogin/>} />
      <Route path="/flatownerregister" element={<FlatownerRegister/>} />
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
      </Route>
    </Routes>
    {/* <Footer /> */}
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
