import React from "react";
import "./jobCard.css"

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const JobCard: React.FC<CardProps> = ({ title, description, icon }) => {
  const lines = typeof description === "string" ? description.split("\n") : description;
  return (
    
    <div className="bg-[#111827] py-10 my-5 relative border  border-gray-700 rounded-lg p-6 flex flex-col items-center gap-4 hover:shadow-lg transition-shadow duration-300">
      <div className="text-cyan-400 text-3xl icon">{icon}</div>
      <h3 className="text-cyan-400 text-xl  font-semibold">{title}</h3>
      <p className="text-gray-300 text-sm">
        {lines.map((line, idx) => (
          <React.Fragment key={idx}>
           * {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default JobCard;
