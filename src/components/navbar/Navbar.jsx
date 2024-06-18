import "./navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="link" style = {{color:"inherit", textDecoration:"none"}}>
        <span className="logo">SuiteSpotter</span>
        </Link>
        <div className="navItems">
          <button className="navButton1">Get Started</button>
          <span className="divider">Already a user? </span>
          <button className="navButton2">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar