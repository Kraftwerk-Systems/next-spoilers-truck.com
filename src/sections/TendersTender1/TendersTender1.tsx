import Tender from "@/components/Tender/Tender";
import Image from "next/image";

import bg from "@/../public/img/bg/section-tenders-description-bg.webp";

export default function TendersTender1() {
  return (
    <section className="TendersTender1" id="tender-1">
      <Tender />
      <div className="TendersTender1__image-wrapper">
        <Image className="TendersTender1__image" src={bg} alt="Tender" />
      </div>
    </section>
  );
}
