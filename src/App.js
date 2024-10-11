import React from 'react';
import './App.css';
import Dashbord from './componet/Dashbord';
import { BrowserRouter } from 'react-router-dom';
import Login from './componet/Login';


function App() {
  return (
    <>
       <BrowserRouter>
            <Dashbord />
        </BrowserRouter>
        <Login/>
    </>
  );
}

export default App;
