import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import "./styles.css";
import Dashboard from './components/pages/Dashboard'
import Login from './components/pages/Login'
import { useAuth, AuthProvider } from "./components/context/AuthContext";
  


function AppContent() {
  const { isAuth } = useAuth();
  return isAuth ? <Dashboard /> : <Login />;
}
function App() {
  
  
 
  return (
    <>
    <AuthProvider>
      <AppContent />
    </AuthProvider>

    </>
  )
}

export default App
