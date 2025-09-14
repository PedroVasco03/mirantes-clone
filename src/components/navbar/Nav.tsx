import "../global.componets.css";
import "./nav.css";
const Nav = () => {
    return(
        <nav className="nav">
            <div className="nav-inner container">
                <div className="brand"><div className="logo" aria-hidden>MI</div><div style={{marginLeft:'6px'}}>Mirantes</div></div>
                <button className="menu-btn btn" aria-label="Abrir menu">☰ Menu</button><div className="nav-links">
                <a href="index.html" className="link">Home</a>
                <a href="jobs.html" className="link">Vagas</a>
                <a href="courses.html" className="link">Cursos</a>
                <a href="pricing.html" className="link">Preços</a>
                <a href="faq.html" className="link">FAQ</a>
                </div>
                <div className="cta"><a className="btn ghost" href="auth.html">Entrar</a><a className="btn primary" href="auth.html">Criar conta</a></div>
            </div>
        </nav>

    )
}

export default Nav