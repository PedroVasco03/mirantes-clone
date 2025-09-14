import React from "react";
import "./planCard.css";

type PlanCardProps = {
  title: string;
  description: string;
  info: string; 
  buttonText: string;
  variant?: "default" | "pro" | "enterprise";
};

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  description,
  info,
  buttonText,
  variant = "default",
}) => {
  return (
    <div className={`card ${variant}`}>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <p className="info">{info}</p>
      <div className="card-footer">
        <a href="#" className={`btn btn-${variant}`} >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default PlanCard;
