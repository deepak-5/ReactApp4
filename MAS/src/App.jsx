import React, { useState } from "react";
import "./App.css";
import HomePages from "./HomePages";
import LoanPage from "./LoanPage";
import Calculator from "./Calculator";
import Chatbot from "./Chatbot";
import FAQ from "./FAQ";
import Status from "./Status";
import Header from "./Header";
import PersonalDetails from "./PersonalDetails";
import PropertyDetails from "./PropertyDetails";
import Identity from "./Identity";
import CreditCard from "./CreditCard";
import Assets from "./Assets";
import Income from "./Income";
import Address from "./Address";
import Employee from "./Employee";
import Investment from "./Investment";
import Loan from "./Loan";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignupPage from "./LoginSignupPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Header />
      <div className="main">
        <Router>
          <Routes>
            {!isLoggedIn && <Route path="/" element={<LoginSignupPage setIsLoggedIn={setIsLoggedIn} />} />}
            {isLoggedIn && <Route path="/" element={<HomePages />} />}
            {isLoggedIn && <Route path="/LoanPage" element={<LoanPage />} />}
            {isLoggedIn && <Route path="/Status" element={<Status />} />}
            {isLoggedIn && <Route path="/calculator" element={<Calculator />} />}
            {isLoggedIn && <Route path="/Chatbot" element={<Chatbot />} />}
            {isLoggedIn && <Route path="/faq" element={<FAQ />} />}
            {isLoggedIn && <Route path="/PersonalDetails" element={<PersonalDetails />} />}
            {isLoggedIn && <Route path="/PropertyDetails" element={<PropertyDetails />} />}
            {isLoggedIn && <Route path="/identity" element={<Identity />} />}
            {isLoggedIn && <Route path="/CreditCard" element={<CreditCard />} />}
            {isLoggedIn && <Route path="/assets" element={<Assets />} />}
            {isLoggedIn && <Route path="/income" element={<Income />} />}
            {isLoggedIn && <Route path="/Address" element={<Address />} />}
            {isLoggedIn && <Route path="/Employee" element={<Employee />} />}
            {isLoggedIn && <Route path="/Loan" element={<Loan />} />}
            {isLoggedIn && <Route path="/Investment" element={<Investment />} />}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
