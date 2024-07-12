import { useTranslations } from "next-intl";
import { useState } from "react";
import Cookies from "js-cookie";
import Button from "@/components/Button/Button";

interface CheckboxState {
  [key: string]: boolean;
  strictlyNecessary: boolean;
  performance: boolean;
  targeting: boolean;
  functionality: boolean;
}

export default function CookieManagementCard({ isOpen, onClose, onAction }: any) {
  const [checkboxes, setCheckboxes] = useState<CheckboxState>({
    strictlyNecessary: true,
    performance: false,
    targeting: false,
    functionality: false,
  });
  const t = useTranslations("common");

  const handleSave = () => {
    Object.keys(checkboxes).forEach((key) => {
      const cookieName = `cookies_${key}`;
      Cookies.set(cookieName, checkboxes[key] ? "true" : "false", {
        expires: 365,
      });
    });

    onAction(checkboxes);
    onClose();
  };

  const handleDeclineAll = () => {
    const declinedPreferences: CheckboxState = {
      strictlyNecessary: true,
      performance: false,
      targeting: false,
      functionality: false,
    };

    setCheckboxes(declinedPreferences);
    onAction(declinedPreferences);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxes((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className={`CookieManagementCard ${isOpen ? "CookieManagementCard--visible" : ""}`}>
      <h4>{t("cookies.card.heading")}</h4>
      <p>{t("cookies.card.description")}</p>
      <ul className="CookieManagementCard__option-list">
        {Object.entries(checkboxes).map(([key, checked]) => (
          <li className="custom-checkbox-wrapper CookieManagementCard__option-item" key={key}>
            <input
              type="checkbox"
              name={key}
              id={key}
              className="custom-checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
              disabled={key === "strictlyNecessary"}
            />
            <label htmlFor={key}>{t(`cookies.card.${key}`)}</label>
          </li>
        ))}
      </ul>
      <div className="CookieManagementCard__buttons-wrapper">
        <Button type="primary" size="compact" onClick={handleSave} className="CookieManagementCard__save">
          {t("cookies.card.save")}
        </Button>
        <Button size="compact" onClick={handleDeclineAll} className="CookieManagementCard__decline">
          {t("cookies.card.declineAll")}
        </Button>
      </div>
    </div>
  );
}
