import React, { useState } from "react";
import "./planCard.css";
import SubscribeModal from "../modal/SubscribeModal";

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
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={`card ${variant}`}>
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p className="info">{info}</p>
        <div className="card-footer">
          <button
            onClick={() => setModalOpen(true)}
            className={`btn btn-${variant}`}
          >
            {buttonText}
          </button>
        </div>
      </div>

      <SubscribeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        planName={title}
      />
    </>
  );
};

export default PlanCard;
