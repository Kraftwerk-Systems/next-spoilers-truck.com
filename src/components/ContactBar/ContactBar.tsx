import useContactBarVisibility from "@/hooks/useContactBarVisibility";
import Image from "next/image";
import phone from "@/assets/icons/phone.svg";
import mobile from "@/assets/icons/mobile.svg";
import email from "@/assets/icons/email.svg";
import facebook from "@/assets/icons/facebook.svg";

const ContactBarItem = ({ icon, text, hideOnMobile }: { icon: string; text: string; hideOnMobile?: boolean }) => {
  return (
    <div className={`ContactBarItem ${hideOnMobile ? "ContactBarItem--hideOnMobile" : ""}`}>
      <Image
        src={icon}
        color="var(--secondary-500)"
        width={24}
        height={24}
        alt="contact"
        className={"ContactBarItem__icon"}
      />
      <span className="ContactBarItem__text">{text}</span>
    </div>
  );
};

const ContactBar: React.FC = () => {
  const isVisible = useContactBarVisibility();

  return (
    <div className={`ContactBar__wrapper ${isVisible ? "ContactBar__wrapper--visible" : ""}`}>
      <div className="ContactBar">
        <ContactBarItem icon={phone} text="+36 22 328-377" hideOnMobile />
        <ContactBarItem icon={mobile} text="+36 20 315 66 00" />
        <ContactBarItem icon={email} text="info@spoilers-truck.com" />
        <ContactBarItem icon={facebook} text="CarTradeKft" hideOnMobile />
      </div>
    </div>
  );
};

export default ContactBar;
