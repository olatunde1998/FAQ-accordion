import Typed from "react-typed";

function Header() {
  return (
    <div className="text-center p-4 text-xl text-blue-800 font-medium">
      <Typed strings={["FAQ/Accordion"]} typeSpeed={200} backSpeed={90} loop />
    </div>
  );
}

export default Header;
