import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/development">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
