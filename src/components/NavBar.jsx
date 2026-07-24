import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <br/>
      <Link className="navButton" to="/">Home</Link>
      <Link className="navButton" to="/socials">Socials</Link>
      <p className="separator"/>
    </div>
  )
}

export default NavBar