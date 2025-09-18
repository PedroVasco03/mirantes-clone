import { useState } from "react";
import { motion } from "framer-motion";

interface JobModalProps {
  onClose: () => void;
  onSave: (job: Job) => void;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  level: string;
}

export default function JobModal({ onClose, onSave }: JobModalProps) {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Remoto");
  const [level, setLevel] = useState("Júnior");

  const handleSave = () => {
    const newJob: Job = {
      id: Date.now(), // id temporário
      title,
      company,
      location,
      type,
      level,
    };
    onSave(newJob);
    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-[#0f172a] text-white p-6 rounded-2xl shadow-lg w-96"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <h3 className="text-lg font-bold mb-4">Nova Vaga</h3>
        
        <input
          type="text"
          placeholder="Título da vaga"
          className="w-full p-2 mb-3 rounded bg-[#1e293b] text-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Empresa"
          className="w-full p-2 mb-3 rounded bg-[#1e293b] text-white"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          type="text"
          placeholder="Localização"
          className="w-full p-2 mb-3 rounded bg-[#1e293b] text-white"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <select
          className="w-full p-2 mb-3 rounded bg-[#1e293b] text-white"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Remoto</option>
          <option>Presencial</option>
          <option>Híbrido</option>
        </select>

        <select
          className="w-full p-2 mb-3 rounded bg-[#1e293b] text-white"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option>Júnior</option>
          <option>Pleno</option>
          <option>Sênior</option>
        </select>

        <div className="flex justify-end gap-3 mt-4">
          <button
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
            onClick={handleSave}
          >
            Publicar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
