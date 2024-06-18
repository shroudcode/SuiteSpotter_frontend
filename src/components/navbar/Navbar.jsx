import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">SuiteSpotter</span>
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