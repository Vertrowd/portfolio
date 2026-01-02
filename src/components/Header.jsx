function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#home" className="logo">Rudra<span>.</span></a>
          <ul className="nav-links">
  <li><a href="#home" className="nav-btn">Home</a></li>
  <li><a href="#about" className="nav-btn">About</a></li>
  <li><a href="#projects" className="nav-btn">Projects</a></li>
  <li><a href="#contact" className="nav-btn">Contact</a></li>
</ul>

          <div className="hamburger">☰</div>
        </nav>
      </div>
    </header>
  )
}

export default Header
