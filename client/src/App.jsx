import { useState } from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';


// Pages
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {

  return (
    <>
      <Routes>
        <Route 
          path='/login'
          element={<Login/>}
        />
        <Route 
          path='/signup'
          element={<Signup/>}
        />
      </Routes>
    </>
  )
}

export default App
