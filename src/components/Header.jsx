function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#home" className="logo">Rudra<span>.</span></a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="hamburger">☰</div>
        </nav>
      </div>
    </header>
  )
}

export default Header
