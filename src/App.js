import React from 'react';
import './App.css';
import Dashbord from './componet/Dashbord';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
       <BrowserRouter>
            <Dashbord />
        </BrowserRouter>
    </>
  );
}

export default App;
