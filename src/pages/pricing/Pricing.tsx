import Footer from "../../components/footer/Footer";
import Layout from "../../components/layout/Layout";
import Nav from "../../components/navbar/Nav";
import PlanCard from "../../components/planCard/PlanCard";
import "./pricing.css";

const Pricing = () => {
    return(
        <Layout>
            <section className="section container">
                <h2>Planos</h2>
                <div className="pricing-grid">
                    <PlanCard
                        title="Gratuito"
                        description="Ideal para começar"
                        info="Crie seu perfil, envie até 3 candidaturas por mês e tenha presença no mercado sem custo."
                        buttonText="Começar"
                        variant="default"
                    />
                    <PlanCard
                        title="Pro"
                        description="Para quem quer crescer"
                        info="Acesso ilimitado a candidaturas, destaque no perfil, mentoria e suporte prioritário."
                        buttonText="Assinar"
                        variant="pro"
                    />
                    <PlanCard
                        title="Empresas"
                        description="Solução corporativa"
                        info="Publique vagas, gerencie candidaturas em equipe, tenha relatórios e suporte dedicado."
                        buttonText="Falar com vendas"
                        variant="enterprise"
                    />
                </div>
            </section>
        </Layout>
    )
}

export default Pricing