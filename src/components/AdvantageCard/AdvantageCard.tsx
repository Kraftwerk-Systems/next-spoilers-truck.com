import React from "react";
import Image from "next/image";

interface AdvantageCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="AdvantageCard">
      {/* <Image className="AdvantageCard__icon" src={icon} width={70} height={70} alt={title} /> */}
      <h3 className="AdvantageCard__title">{title}</h3>
      <p className="AdvantageCard__subtitle">{subtitle}</p>
    </div>
  );
};

export default AdvantageCard;
