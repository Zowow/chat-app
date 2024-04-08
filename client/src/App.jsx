import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';


// Pages
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Welcome from './pages/Welcome';

// Hooks
import { useAuthContext } from './hooks/useContexts/useAuthContext';

import {Toaster} from 'react-hot-toast'



function App() {
  const {user} = useAuthContext();

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route 
          path=''
          element={user ? <Welcome user={user}/> : <Navigate to='/login'/>}
        />
        <Route 
          path='/login'
          element={!user ? <Login/> : <Navigate to='/'/>}
        />
        <Route 
          path='/signup'
          element={!user ? <Signup/> : <Navigate to='/'/>}
        />
      </Routes>
      <Toaster/>
      </BrowserRouter>
    </>
  )
}

export default App
