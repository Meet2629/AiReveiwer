import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './HomePage';
import AuthForm from './AuthForm';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<AuthForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
}
