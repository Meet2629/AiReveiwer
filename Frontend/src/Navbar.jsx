import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Optional
// Remove the Dashboard import if it's not used directly in this file

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/Auth');
  };

  const handleDashboardClick = () => {
    navigate('/Dashboard');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
        Career Gen
      </div>
      <ul className="nav-links">
        <li><button className="nav-link-btn" onClick={handleHomeClick}>Home</button></li>
        <li><button className="nav-link-btn" onClick={handleDashboardClick}>AI-Code-Review</button></li>
      </ul>
      <button className="nav-btn" onClick={handleLoginClick}>Login and Signup</button>
    </nav>
  );
};

export default Navbar;
