import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Incoming</h2>
        </Link>
        <Link to="/summary">
          <h2> Inc. Summary</h2>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
