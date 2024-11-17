import { Link } from "react-router-dom";

const HeaderItem = ({ content, to }) => {
  return (
    <Link
      className="text-white py-2 px-8 border border-solid rounded-full border-white hover:text-slate-400 bg-emerald-800 hover:bg-emerald-700 focus:bg-emerald-900"
      to={to}
    >
      {content}
    </Link>
  );
};

export default HeaderItem;
