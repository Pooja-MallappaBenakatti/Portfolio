import '../cssComponents/NavBar.css';

function NavBar() {
  return (
    <header className="header">
      <div className="logo">Pooja Benakatti</div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default NavBar;
