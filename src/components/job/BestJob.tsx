import "../global.componets.css";
import JobCard from "./components/JobCard";
const BestJob = () =>{
    return(
        <section className="section container">
            <h2 style={{fontSize:'22px'}}>Vagas em destaque</h2>
            <div className="jobs-grid" style={{marginTop:'12px'}}>
                <JobCard 
                    title="Desenvolvedor Front-end"
                    company="Empresa 1 • Luanda"
                    pillText="Pleno"
                    requirements="React, Next.js, testes unitários."
                />
            </div>
        </section>
    )
}

export default BestJob