import logo from "../assets/images/logo.png";

function Nav() {
  return (
    <nav className="flex justify-around mt-6 mb-0">
      <Logo />
      <ul className="flex space-x-16">
        <li>
          <a href="#Home" className="relative group">
            Home
            <span className="block h-[2px] w-0 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </a>
        </li>
        <li>
          <a href="#about" className="relative group">
            About
            <span className="block h-[2px] w-0 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </a>
        </li>
        <li>
          <a href="#skills" className="relative group">
            Skills
            <span className="block h-[2px] w-0 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </a>
        </li>
        <li>
          <a href="#projects" className="relative group">
            Projects
            <span className="block h-[2px] w-0 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </a>
        </li>
        <li>
          <a href="#Article" className="relative group">
            Article
            <span className="block h-[2px] w-0 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </a>
        </li>
        <li>
          <a href="#contact" className="relative group">
            Contact
            <span className="block h-[2px] w-0 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Logo() {
  return (
    <div className="ml-0">
      <img src={logo} alt="logo" className="w-28 h-20 " />{" "}
      {/* Use the imported variable here */}
    </div>
  );
}

export default Nav;
