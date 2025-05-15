import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './HomePage';
import AuthForm from './AuthForm';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

export default function App() {
  console.log("✅ App component rendered");  // Add this line
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<AuthForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
