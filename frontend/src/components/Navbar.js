import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Product Managment System</h1>
        <div className="links">
          <Link to ="/Summary">Summary</Link>
          <Link to="/" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>New Product</Link >
        </div>
      </nav>
    );
  }
   
  export default Navbar;
  