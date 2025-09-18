import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <nav className="nav mb-5">
      <div className="nav-inner container">
        <div className="brand">
          <div className="logo" aria-hidden>
            MI
          </div>
          <div style={{ marginLeft: "6px" }}>Mirantes</div>
        </div>

        {/* botão só no mobile */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        {/* menu fixo fora do fluxo do flex */}
        <div className={`navB-links ${open ? "active" : ""}`}>
          <Link to="/" className="link" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/job" className="link" onClick={() => setOpen(false)}>
            Vagas
          </Link>
          <Link to="/courses" className="link" onClick={() => setOpen(false)}>
            Cursos
          </Link>
          <Link to="/pricing" className="link" onClick={() => setOpen(false)}>
            Preços
          </Link>
          <Link to="/faq" className="link" onClick={() => setOpen(false)}>
            FAQ
          </Link>
          <Link to="/auth" className="btn primary" onClick={() => setOpen(false)}>
            Entrar
          </Link>
        </div>
      </div>

      {/* overlay quando aberto */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </nav>
  );
};

export default Nav;
