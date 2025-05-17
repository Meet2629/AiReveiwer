import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
     CodeAI
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link-btn">Home</Link>
        </li>
        <li>
          <Link to="/Dashboard" className="nav-link-btn"> AI-Code-Review</Link>
        </li>
      </ul>
      <Link to="/Auth">
        <button className="nav-btn">Login and Signup</button>
      </Link>
    </nav>
  );
};

export default Navbar;
