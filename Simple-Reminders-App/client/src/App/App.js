import React, {useState, useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import axios from "axios";
import HomePage from "../pages/HomePage/HomePage";
import SigninPage from '../pages/SigninPage/SigninPage';
import "./App.css";

function App() {
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);

  useEffect(() => {
    async function getAuthenticated() {
      const request = {
        method: "get",
        url: "http://localhost:5000/api/auth/authenticated",
        withCredentials: true
      };
      let response;
      try{
        response = await axios(request);
        setUserIsAuthenticated(response.data.authenticated);
      } catch (err) {
        console.log(err);
      }
    }

    getAuthenticated();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={userIsAuthenticated? <HomePage /> : <SigninPage />} />
      </Routes>
    </div>
  );
}

export default App;
