"use client";

import React, { useState, useEffect, useRef, startTransition } from "react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

import enSvg from "@/assets/icons/en.svg";
import huSvg from "@/assets/icons/hu.svg";
import deSvg from "@/assets/icons/de.svg";
import hrSvg from "@/assets/icons/hr.svg";
import itSvg from "@/assets/icons/it.svg";
import roSvg from "@/assets/icons/ro.svg";

import logo from "@/../public/img/logo/logo-title.png";
import { useRouter, usePathname } from "@/navigation";
import ContactBar from "@/components/ContactBar/ContactBar";
import BrandBar from "../BrandBar/BrandBar";

export default function Header({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("common");

  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageListOpen, setIsLanguageListOpen] = useState(false);

  const [applyClass, setApplyClass] = useState(false);
  const elementRef1 = useRef<HTMLUListElement>(null);
  const elementRef2 = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let threshold = 4.5 * 16; // Default threshold

      if (window.innerWidth <= 650) {
        threshold = 7 * 16; // For screens up to 650px
      } else if (window.innerWidth <= 1250) {
        threshold = 4.5 * 16; // For screens up to 1250px
      }

      setApplyClass(scrollPosition <= threshold);
    };

    // Run once on mount and then on every scroll event
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to toggle the isOpen state
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the nav
  const closeNav = () => {
    setIsOpen(false);
  };

  const toggleLanguageList = () => {
    setIsLanguageListOpen(!isLanguageListOpen);
  };

  const [scrolledDown, setScrolledDown] = useState(false);
  const lastScrollY = useRef(0); // Ref to keep track of the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 200) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down
          setScrolledDown(true);
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up
          setScrolledDown(false);
        }

        lastScrollY.current = currentScrollY; // Update lastScrollY ref with the new position
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen || isLanguageListOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto"; // Ensure scrolling is re-enabled on component unmount
    };
  }, [isOpen, isLanguageListOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsLanguageListOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeAll = () => {
    setIsOpen(false);
    setIsLanguageListOpen(false);
  };

  const changeLanguage = (lng: string) => {
    setIsLanguageListOpen(false);

    startTransition(() => {
      router.replace(pathname, { locale: lng });
    });
  };

  const isActiveLanguage = (lng: string) => {
    return locale === lng;
  };

  // Define navigation items
  const navItems = [
    { path: "/#hero", labelKey: "header.navlist.home" },
    { path: "/#advantages", labelKey: "header.navlist.advantages" },
    { path: "/#about", labelKey: "header.navlist.about" },
    { path: "/tenders", labelKey: "header.navlist.tenders" },
    { path: "/#contact", labelKey: "header.navlist.contact" },
  ];

  // Map over navItems to render Links
  const navLinks = navItems.map((item, index) => (
    <li key={index} className={"Header__nav-item"}>
      <Link href={item.path} className="Header__nav-link" onClick={closeNav}>
        {t(item.labelKey)} {/* Directly use t function with the label key */}
      </Link>
    </li>
  ));

  return (
    <>
      <header className={`Header  ${scrolledDown ? "Header--scrolled" : ""}`}>
        <div className={`modal-backdrop ${isOpen || isLanguageListOpen ? "show" : ""}`} onClick={closeAll}></div>
        <BrandBar />
        <ContactBar />
        <nav className="Header__nav">
          <div className="Header__logo-wrapper">
            <Link href="/#hero" className="Header__logo-link">
              <Image src={logo} alt="Logo" className="Header__logo" />
            </Link>
          </div>
          <div className="Header__nav-item Header__nav-item--shop Header__nav-item--mobile">
            <Link href="/#shop-highlights" className="Header__nav-link Header__nav-link--shop">
              <span className="Header__nav-link--spoiler">{t("header.navlist.spoiler")}</span>{" "}
              {t("header.navlist.shop")}
            </Link>
          </div>
          <ul
            ref={elementRef1}
            className={`Header__nav-list ${applyClass ? "brandbar-adjusted-top-offset" : ""} ${
              isOpen ? "Header__nav-list--open" : ""
            }`}
          >
            <div className="Header__nav-close" onClick={closeNav}>
              {t("header.navlist.close")} [X]
            </div>

            {navLinks}

            <li className="Header__nav-item Header__nav-item--shop">
              <Link href="/#shop-highlights" className="Header__nav-link Header__nav-link--shop">
                {t("header.navlist.spoiler")} {t("header.navlist.shop")}
              </Link>
            </li>
          </ul>

          <div className="Header__controls">
            <LanguageSelector onToggle={toggleLanguageList} />
            <div className="Header__nav-toggle " onClick={toggleNav}>
              <span className="Header__nav-toggle-text u-bold">{t("header.menu")}</span>
              <div className="Header__nav-toggle-line-container">
                <div className="Header__nav-toggle-line"></div>
                <div className="Header__nav-toggle-line"></div>
                <div className="Header__nav-toggle-line"></div>
              </div>
            </div>
          </div>

          <ul
            ref={elementRef2}
            className={`Header__language-list ${applyClass ? "brandbar-adjusted-top-offset" : ""} ${
              isLanguageListOpen ? "Header__language-list--open" : ""
            }`}
          >
            <div className="Header__language-close" onClick={toggleLanguageList}>
              {t("header.language.close")} [X]
            </div>

            <li
              onClick={() => changeLanguage("en")}
              key={"en"}
              className={`Header__language-item ${isActiveLanguage("en") ? "Header__language-item--active" : ""}`}
            >
              <span className="Header__language-link">{t(`header.language.en`)}</span>
              <Image src={enSvg} className="Header__language-icon" width={24} height={24} alt="en" />
              {/* <SvgIcon name={code} className="Header__language-icon" width="1.5rem" /> */}
            </li>

            <li
              onClick={() => changeLanguage("hu")}
              key={"hu"}
              className={`Header__language-item ${isActiveLanguage("hu") ? "Header__language-item--active" : ""}`}
            >
              <span className="Header__language-link">{t(`header.language.hu`)}</span>
              <Image src={huSvg} className="Header__language-icon" width={24} height={24} alt="hu" />
            </li>

            <li
              onClick={() => changeLanguage("de")}
              key={"de"}
              className={`Header__language-item ${isActiveLanguage("de") ? "Header__language-item--active" : ""}`}
            >
              <span className="Header__language-link">{t(`header.language.de`)}</span>
              <Image src={deSvg} className="Header__language-icon" width={24} height={24} alt="de" />
            </li>

            <li
              onClick={() => changeLanguage("hr")}
              key={"hr"}
              className={`Header__language-item ${isActiveLanguage("hr") ? "Header__language-item--active" : ""}`}
            >
              <span className="Header__language-link">{t(`header.language.hr`)}</span>
              <Image src={hrSvg} className="Header__language-icon" width={24} height={24} alt="hr" />
            </li>

            <li
              onClick={() => changeLanguage("it")}
              key={"it"}
              className={`Header__language-item ${isActiveLanguage("it") ? "Header__language-item--active" : ""}`}
            >
              <span className="Header__language-link">{t(`header.language.it`)}</span>
              <Image src={itSvg} className="Header__language-icon" width={24} height={24} alt="it" />
            </li>

            <li
              onClick={() => changeLanguage("ro")}
              key={"ro"}
              className={`Header__language-item ${isActiveLanguage("ro") ? "Header__language-item--active" : ""}`}
            >
              <span className="Header__language-link">{t(`header.language.ro`)}</span>
              <Image src={roSvg} className="Header__language-icon" width={24} height={24} alt="ro" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
