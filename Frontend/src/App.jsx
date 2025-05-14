import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/HomePage'
import AuthForm from './components/AuthForm'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'

export default function App() {
  
  return (
    <BrowserRouter>
     <Navbar /> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Auth" element={<AuthForm/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
