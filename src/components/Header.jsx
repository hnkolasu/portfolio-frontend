import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-between w-screen p-8 gap-3 bg-emerald-900 ">
      <Link className="text-white " to="/">
        Nicolas
      </Link>
      <Link className="text-white" to="/blog">
        Blog
      </Link>
      <Link className="text-white" to="/design">
        Design
      </Link>
      <Link className="text-white" to="/development">
        Desenvolvimento
      </Link>
    </div>
  );
};

export default Header;
