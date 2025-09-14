import "./auth.css";

const Auth = () =>{
    return(
        <main>
            <section className="section container">
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'18px'}}>
                    <div className="card entrar" >
                        <h3 className="formText">Entrar</h3>
                        <label className="label lblForm" >E‑mail</label>
                        <input className="input" type="email" placeholder="seu@email.com"/>
                        <label className="label lblForm" style={{marginTop:'8px'}}>Palavra‑passe</label>
                        <input className="input" type="password" placeholder="••••••"/>
                        <div style={{marginTop:'12px'}}><a className="btn primary" href="#d">Entrar</a></div>
                    </div>

                    <div className="card novo">
                        <h3 className="formText">Criar Conta</h3>
                        <label className="label lblForm">Nome completo</label>
                        <input className="input" placeholder="Seu nome"/>
                        <label className="label lblForm" style={{marginTop:'8px'}}>E‑mail</label>
                        <input className="input" placeholder="seu@email.com"/>
                        <label className="label lblForm" style={{marginTop:'8px'}}>Palavra‑passe</label>
                        <input className="input" placeholder="••••••"/>
                        <div style={{marginTop:'12px',display:'flex',justifyContent:'flex-end'}}><a className="btn primary" href="#hj">Criar conta</a></div>
                    </div>
                </div>
            </section>
        </main>
    )
} 

export default Auth