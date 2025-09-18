import Layout from "../../components/layout/Layout";
import { FaQuestion } from "react-icons/fa";
import "./faq.css";


interface FaqItem {
  title: string;
  description: string;
}

const faqItems: FaqItem[] = [
  { title: "Como publicar uma vaga?", description: "Crie conta empresa e publique." },
  { title: "Como encontrar cursos?", description: "Página Cursos com filtros." },
  { title: "Formas de pagamento", description: "Cartão, transferência." },
  { title: "Suporte", description: "contacto@mirantes.io" },
];

const Faq = () =>{
    const QuestionIcon = FaQuestion as unknown as React.FC<{ size?: number, className?: string }>;

    return(
         <Layout>
            <main >
                <section className="container section mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-4">FAQ</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                    {faqItems.map((item, index) => (
                        <div
                        key={index}
                        className="card group bg-[#141c2c] border border-white/5 rounded-xl p-4 hover:bg-[#1b2436] transition cursor-pointer"
                        >
                        <strong className="block mb-1 text-base">{item.title}</strong>
                        <p className="text-gray-500 text-sm">{item.description}</p>
                        <QuestionIcon size={30} className="icone text-gray-400 group-hover:text-white transition" />
                        </div>
                    ))}
                    </div>
                </section>
            </main>
        </Layout>
    )
} 

export default Faq