import React from "react";
import { FaAtom, FaDev, FaExpeditedssl } from "react-icons/fa";
import "../global.componets.css";
import JobCard from "./components/JobCard";

const BestJob= () => {
    const AtomIcon = FaAtom  as unknown as React.FC<{ size?: number }>;
    const DevIcon = FaDev  as unknown as React.FC<{ size?: number }>;
    const ExpeditedsslIcon = FaExpeditedssl  as unknown as React.FC<{ size?: number }>;
  const cards = [
    {
      title: "FRONTEND DEVELOPER",
      description:
    "Criar interfaces de usuário\nGarantir responsividade em dispositivos\nImplementar designs com HTML, CSS, JS\nOtimizar desempenho e acessibilidade",
    icon: <AtomIcon size={70} />,
    },
    {
      title: "BACKEND DEVELOPER",
      description:
        "Criar e gerenciar a lógica do servidor.\n" +
        "Garantir segurança do sistema.\n" +
        "Integrar sistemas e serviços externos.\n" +
        "Manter e otimizar a arquitetura de dados.",
    icon: <DevIcon size={70} />,
    },
    {
      title: "CYBERSECURIRY ANALYST",
      description:
        "Monitorar e proteger sistemas.\n" +
        "Identificar vulnerabilidades.\n" +
        "Implementar protocolos de segurança.\n" +
        "Testes de penetração, análise de incidentes.",
  icon: <ExpeditedsslIcon  size={70} />,
    },
  ];

 

  return (
    <section className="section container">
        <div className="jobTextContainer my-10" >
            <h2 className="text-xl ">Vagas em destaque</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
                <JobCard key={idx} {...card}/>
            ))}
            </div>
    </section>);
    
};

export default BestJob;
