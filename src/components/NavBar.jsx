import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link className="navButton" to="/">Home</Link>
      <Link className="navButton" to="/socials">Socials</Link>
    </div>
  )
}

export default NavBar