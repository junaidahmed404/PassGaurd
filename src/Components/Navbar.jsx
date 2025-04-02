const Navbar = () => {
  return (
    <nav className="a bg-purple-500 flex items-center justify-around px-4 h-14 text-white">
      <div className="nav-logo font-bold">
        &lt;<span>Pass</span>
        <span className="text-purple-500 bg-white rounded p-1">Guard</span>/&gt;
      </div>
      <ul className="flex justify-around items-center">
        <li className="flex gap-10">
          <a className="hover:font-bold" href="/">
            Home
          </a>
          <a className="hover:font-bold" href="/about">
            About
          </a>
          <a className="hover:font-bold" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
