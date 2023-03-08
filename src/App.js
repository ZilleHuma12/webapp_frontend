import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routeData";
import { Provider } from "react-redux";
import "antd/dist/reset.css";
import Protected from "./Components/Protected";
import Home from "./Views/Home";
import DashboardLayout from "./Layouts/DashboardLayout";
import Signin from "./Views/Signin";
import Signup from "./Views/Signup";

function App() {
  return (
    <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={<Protected Component={DashboardLayout} />}
        >
          <Route path="/" element={<Protected Component={Home} />} />
         </Route>
      </Routes>
  );
}

export default App;
