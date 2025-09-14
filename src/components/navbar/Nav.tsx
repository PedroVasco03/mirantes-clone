import { Link } from "react-router-dom";
import "../global.componets.css";
import "./nav.css";
const Nav = () => {
    return(
        <nav className="nav">
            <div className="nav-inner container">
                <div className="brand"><div className="logo" aria-hidden>MI</div><div style={{marginLeft:'6px'}}>Mirantes</div></div>
                <button className="menu-btn btn" aria-label="Abrir menu">☰ Menu</button>
                <div className="nav-links">
                    <Link to="/" className="link">Home</Link>
                    <Link to="/job" className="link">Vagas</Link>
                    <Link to="/courses" className="link">Cursos</Link>
                    <Link to="/pricing" className="link">Preços</Link>
                    <Link to="/faq" className="link">FAQ</Link>
                </div>
                <div className="cta"><Link to="/auth" className="btn ghost">Entrar</Link> <Link to="/auth" className="btn primary">Criar conta</Link></div>
            </div>
        </nav>

    )
}

export default Nav