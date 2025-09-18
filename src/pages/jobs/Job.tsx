"use client";
import { useState } from "react";
import { FaBriefcase, FaFilter, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import JobModal from "./JobModal";
import "./job.css";
import Layout from "../../components/layout/Layout";

interface JobType {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  level: string;
}


const Job = () =>{
    const BriefcaseIcon = FaBriefcase as unknown as React.FC<{ size?: number }>;
    const FilterIcon = FaFilter as unknown as React.FC<{ size?: number }>;
    const PlusIcon = FaPlus as unknown as React.FC<{ size?: number }>;
    const [jobs, setJobs] = useState<JobType[]>([
    { id: 1, title: "Frontend Developer", company: "Tech Angola", location: "Luanda", type: "Remoto", level: "Pleno" },
    { id: 2, title: "Backend Developer", company: "SoftDev", location: "Remoto", type: "Híbrido", level: "Sênior" },
    { id: 3, title: "UI/UX Designer", company: "DesignPro", location: "Luanda", type: "Remoto", level: "Júnior" },
    { id: 4, title: "Mobile Developer", company: "AppLab", location: "Luanda", type: "Presencial", level: "Pleno" },
    { id: 5, title: "Data Analyst", company: "DataSolutions", location: "Remoto", type: "Remoto", level: "Sênior" },
    { id: 6, title: "DevOps Engineer", company: "CloudAngola", location: "Luanda", type: "Híbrido", level: "Pleno" },
    { id: 7, title: "Product Manager", company: "Innovate", location: "Luanda", type: "Presencial", level: "Sênior" },
    { id: 8, title: "QA Tester", company: "QualityFirst", location: "Remoto", type: "Remoto", level: "Júnior" },
    { id: 9, title: "Cybersecurity Analyst", company: "SecureIT", location: "Luanda", type: "Presencial", level: "Pleno" },
    { id: 10, title: "Project Manager", company: "BuildSoft", location: "Luanda", type: "Híbrido", level: "Sênior" },
  ]);

   const [showModal, setShowModal] = useState(false);
   const [showFilters, setShowFilters] = useState(false);

  const addJob = (job: JobType) => {
    setJobs((prev) => [...prev, job]);
  };
    return(
         <Layout>
           <section className="section  container relative">
                <h2 className="text-2xl font-bold mb-6">Vagas</h2>

                {/* LISTA DE VAGAS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {jobs.map((job) => (
                    <article
                    key={job.id}
                    className="bg-[#111827] border border-gray-700 p-4 rounded-lg shadow-md flex flex-col justify-between"
                    >
                    <div className="flex items-center gap-3">
                        {/* Ícone da vaga */}
                        <div className="p-3 rounded-full bg-blue-600/20 text-blue-400">
                        <BriefcaseIcon size={20} />
                        </div>

                        {/* Infos principais */}
                        <div>
                        <div className="font-bold">{job.title}</div>
                        <div className="text-gray-400 text-sm mt-1">
                            {job.company} • {job.location}
                        </div>
                        </div>
                    </div>

                    {/* Rodapé do card */}
                    <div className="mt-3 flex justify-between items-center">
                        <span className="text-gray-400 text-sm">
                        {job.type} • {job.level}
                        </span>
                        <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white text-sm">
                        Candidatar
                        </button>
                    </div>
                    </article>
                ))}
                </div>

                {/* BOTÕES FLUTUANTES */}
                <motion.div
                    className="fixed bottom-6 right-6 flex flex-col gap-4 z-50"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                >
                    {/* Botão Filtro */}
                    <motion.button
                    className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setShowFilters(!showFilters)}   // 👈 toggle correto
                    >
                    <FilterIcon size={20} />
                    </motion.button>

                    {/* Botão Publicar Vaga */}
                    <motion.button
                    className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg"
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setShowModal(true)}
                    >
                    <PlusIcon size={20} />
                    </motion.button>
                </motion.div>

                {/* SIDEBAR DE FILTROS */}
                <AnimatePresence>
                    {showFilters && (
                    <>
                        <motion.div
                        className="fixed inset-0 bg-black/60 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowFilters(false)}
                        />

                        <motion.div
                        className="fixed top-0 left-0 w-3/4 sm:w-1/3 h-full bg-[#0b1220] text-white p-6 shadow-lg z-50"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                        <h3 className="text-xl font-semibold mb-4">Filtros</h3>
                        <label className="block text-sm text-gray-400 mt-3">Palavra-chave</label>
                        <input className="w-full p-2 rounded bg-gray-800 border border-gray-700 mt-1" placeholder="Ex.: Frontend" />
                        
                        <label className="block text-sm text-gray-400 mt-3">Localização</label>
                        <input className="w-full p-2 rounded bg-gray-800 border border-gray-700 mt-1" placeholder="Luanda, Remoto" />
                        
                        <label className="block text-sm text-gray-400 mt-3">Senioridade</label>
                        <select className="w-full p-2 rounded bg-gray-800 border border-gray-700 mt-1">
                            <option>Júnior</option>
                            <option>Pleno</option>
                            <option>Sênior</option>
                        </select>
                        
                        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                            Aplicar
                        </button>
                        </motion.div>
                    </>
                    )}
                </AnimatePresence>

                {/* MODAL DE ADICIONAR JOB */}
                {showModal && <JobModal onClose={() => setShowModal(false)} onSave={addJob} />}
            </section>
        </Layout>
    )
} 

export default Job