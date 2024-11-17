import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <div className="flex flex-row justify-between w-screen p-8 gap-3 bg-emerald-900 ">
      <HeaderItem content={"Nicolas"} to={"/"} />
      <HeaderItem content={"Blog"} to={"/blog"} />
      <HeaderItem content={"Design"} to={"/design"} />
      <HeaderItem content={"Desenvolvimento"} to={"/development"} />
    </div>
  );
};

export default Header;
