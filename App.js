import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AddCustomer from "./CustomerAPI/AddCustomer";
import EditCustomer from "./CustomerAPI/EditCustomer";
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path = "/" element={<Home/>}/>
          <Route exact path = "/addCustomer" element = {<AddCustomer/>}/>
          <Route exact path = "/editCustomer/:id" element = {<EditCustomer/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
