function Navbar({ links }) {
  return (
    <header>
      <div className="navbar">
        {links.map((link) => (
          <a key={link.href} className="nav-link" href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;