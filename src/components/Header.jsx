import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <nav>
          <a href="#home" className="logo">
            Rudra<span>.</span>
          </a>

          <ul className={`nav-links ${open ? "active" : ""}`}>
            <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>

          <div
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            ☰
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
