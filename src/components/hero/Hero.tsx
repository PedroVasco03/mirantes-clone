import "../global.componets.css";
import "./hero.css";

const Hero = () => {
    return(
        <>
           <section className="hero container my-5">
                <div className="hero-grid">
                    <div>
                    <div className="kicker">Feira Digital · Angola</div>
                    <h1 className="h1">Carreira‑verso com <span className="accent">infinitas possibilidades</span></h1>
                    <p className="lead">Conectamos profissionais, cursos e empresas num só espaço. Monte o seu perfil, candidate-se a vagas e aprenda com cursos práticos.</p>
                    <div className="row" style={{gap:'12px'}}>
                        <a className="btn primary" href="/auth">Começar agora</a>
                        <a className="btn" data-link href="#features">Como funciona</a>
                    </div>
                    <div style={{marginTop:'20px',display:'flex',gap:'10px',alignItems:'center',color:'var(--muted)'}}><div className="pill">20k+ Usuários</div><div className="pill">1k+ Vagas</div><div className="pill">300+ Empresas</div></div>
                    </div>
                    <div className="hero-card">
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <div>
                        <div style={{fontWeight:'800',fontSize:'18px'}}>MIRANTES</div>
                        <div style={{color:'var(--muted)',marginTop:'8px'}}>O futuro em um clique, cultura e inovação em um único clique. Nunca foi tão fácil.</div>
                        </div>
                        <div style={{width:'120px',height:'80px',borderRadius:'12px',background:'linear-gradient(90deg,#112131,#0b1116)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--muted)'}}>MI</div>
                    </div>
                    <div className="infoCard">
                        <div className="cardBtn"><strong>Vagas</strong><div style={{color:'var(--muted)',marginTop:'6px'}}>Candidaturas rápidas</div></div>
                        <div className="cardBtn"><strong>Cursos</strong><div style={{color:'var(--muted)',marginTop:'6px'}}>Certificados práticos</div></div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero