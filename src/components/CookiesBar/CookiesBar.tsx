"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Button from "@/components/Button/Button";
import CookieManagementCard from "@/components/CookieManagementCard/CookieManagementCard";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function CookiesBar() {
  const [isCookieCardOpen, setIsCookieCardOpen] = useState(false);
  const [display, setDisplay] = useState(false);
  const t = useTranslations("common");

  const handleAcceptCookies = () => {
    Cookies.set("userConsent", "true", { expires: 365 });
    Cookies.set("cookieSettingsChosen", "true", { expires: 365 });
    setDisplay((prev) => false);
  };

  const handleManageCookies = () => {
    setIsCookieCardOpen(!isCookieCardOpen);
  };

  const handleCloseCookieCard = () => {
    setIsCookieCardOpen(false);
  };

  const handleCookieCardAction = (preferences: { [key: string]: boolean }) => {
    // Dummy logic to set cookies based on user preferences
    Object.entries(preferences).forEach(([cookieName, allowed]) => {
      if (allowed) {
        // Set a dummy value for allowed cookies
        Cookies.set(cookieName, "allowed", { expires: 365 });
      } else {
        // Remove cookies that are not allowed
        Cookies.remove(cookieName);
      }
    });

    Cookies.set("cookieSettingsChosen", "true", { expires: 365 });
    setIsCookieCardOpen(false);
    setDisplay(false);
  };

  useEffect(() => {
    if (Cookies.get("cookieSettingsChosen") === "false") {
      setDisplay(true);
    }
  }, []);

  return (
    <div
      className={`CookiesBar__wrapper ${display ? "CookiesBar__wrapper--visible" : ""} ${
        isCookieCardOpen ? "CookiesBar__wrapper--moved" : ""
      }`}
    >
      <CookieManagementCard
        isOpen={isCookieCardOpen}
        onClose={handleCloseCookieCard}
        onAction={handleCookieCardAction}
      />
      <div className={`CookiesBar ${isCookieCardOpen ? "CookiesBar--hidden-on-mobile" : ""}`}>
        <h3 className="CookiesBar__heading">{t("cookies.cookiesBar.heading")}</h3>
        <p className="CookiesBar__text">
          {t("cookies.cookiesBar.text")}
          <Link href="/privacy" className="CookiesBar__link">
            {t("cookies.cookiesBar.link")}
          </Link>
        </p>
        <div className="CookiesBar__button-wrapper">
          <Button onClick={handleAcceptCookies} type="primary" size="compact" className="CookiesBar__accept">
            <span className="u-uc u-bold">{t("cookies.cookiesBar.accept")}</span>
          </Button>
          <Button onClick={handleManageCookies} size="compact" isDark={true} className="CookiesBar__manage">
            {t("cookies.cookiesBar.manage")}
          </Button>
        </div>
      </div>
    </div>
  );
}
