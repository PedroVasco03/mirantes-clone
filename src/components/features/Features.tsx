import "../global.componets.css";
import "./features.css";
const Features = () =>{
    return(
        <section id="features" className="section container">
            <div className="featuresTextContainer" >
                <h2>Como funciona</h2>
                <a className="btn ghost" href="/job">Ver todas as vagas</a>
            </div>
            <div className="features" style={{marginTop:'14px'}}>
                <div className="feature"><strong>Crie o seu perfil</strong><div className="featureContent">Adicione competências, portfólio e certificados.</div></div>
                <div className="feature"><strong>Candidate-se</strong><div className="featureContent">Aplicações com 1 clique e rastreamento de status.</div></div>
                <div className="feature"><strong>Aprenda</strong><div className="featureContent">Cursos práticos para subir na carreira.</div></div>
            </div>
        </section>
    )
}

export default Features