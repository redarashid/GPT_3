import "./Navbar.css";

function Navbar() {
  return (
    <header className="nv-navbar">
      <div className="nv-left">
        <a href="#" className="nv-brand">GPT-3</a>

        <nav className="nv-links">
          <a href="#">Home</a>
          <a href="#">What is GPT?</a>
          <a href="#">Open AI</a>
          <a href="#">Case Studies</a>
          <a href="#">Library</a>
        </nav>
      </div>

      <div className="nv-right">
        <a href="#" className="nv-signin">Sign in</a>
        <button className="nv-btn">Sign up</button>
      </div>
    </header>
  );
}

export default Navbar;
