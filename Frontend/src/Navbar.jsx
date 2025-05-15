import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // (Optional - may be unused)


const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/Auth');
  };

  return (
    <nav className="navbar">
      <div className="logo">Career Gen</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">AI-Code-Review</a></li> 
        <li><a href="vaghasiyam910@gmail.com">Contact</a></li>
      </ul>
      <button className="nav-btn" onClick={handleLoginClick}>Login and Signup</button>
    </nav>
  );
};

export default Navbar;
