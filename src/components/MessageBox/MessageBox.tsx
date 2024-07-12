"use client";

import { useState, useEffect } from "react";
import Button from "@/components/Button/Button";
import { useTranslations } from "next-intl";
import Image from "next/image";

import man from "@/assets/icons/man.svg";

export default function MessageBox({ locale }: { locale: string }) {
  const t = useTranslations("common");

  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState<string>("");
  const [feedbackType, setFeedbackType] = useState<"success" | "error" | "warning" | "">("");

  const [isLoading, setIsLoading] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  useEffect(() => {
    // Reset feedback whenever the checkbox checked state changes
    setFeedback("");
    setFeedbackType("");
  }, [isCheckboxChecked]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset feedback state at the start of each submission attempt
    setFeedback(() => "");
    setFeedbackType(() => "");

    if (!isCheckboxChecked) {
      setFeedback(t("MessageBox.privacyPolicyError"));
      setFeedbackType("warning"); // Use 'warning' or 'error' as appropriate for your UI
      return;
    }

    setIsLoading(true); // Start loading

    const formData = new FormData();
    formData.append("email", email);
    formData.append("subject", "Quick Form Submission");
    formData.append("message", `Quick Form Submission by ${email} in ${locale} language.`);

    try {
      const response = await fetch(`/api/forms?lang=${locale}`, {
        method: "POST",
        body: formData,
        headers: {
          "x-api-key": "YOUR_API_KEY",
        },
      });

      if (response.ok) {
        // const data = await response.json();
        setFeedback(/* data.message ||  */ t("MessageBox.messageSuccess"));
        setFeedbackType("success");
        // Reset form here if needed
      } else {
        // const errorData = await response.json();
        setFeedback(
          /* errorData.message || */
          t("MessageBox.submitError")
        );
        setFeedbackType("error");
      }
    } catch (error) {
      setFeedback(t("MessageBox.submitError"));
      setFeedbackType("error");
    } finally {
      setIsLoading(false); // Stop loading regardless of the outcome
    }
  };

  return (
    <div className="MessageBox">
      <div className="MessageBox__title-wrapper">
        <div className="MessageBox__title">
          <h3 className="MessageBox__heading">
            {t("MessageBox.heading1")}
            <span className="u-semibold">{t("MessageBox.heading2")}</span>
            {t("MessageBox.heading3")}
          </h3>
          <span className="MessageBox__subheading">{t("MessageBox.subheading")}</span>
        </div>

        <Image src={man} className="MessageBox__man" width={140} alt="Man" />
      </div>
      <div className="MessageBox__content-wrapper">
        <div className="MessageBox__content">
          <div className="MessageBox__selector"></div>
          {isLoading ? (
            <div className="Loader"></div>
          ) : (
            <form className="MessageBox__form" onSubmit={handleSubmit}>
              <h4 className="MessageBox__form-heading">
                {t("MessageBox.form.heading1")} <span className="u-semibold">{t("MessageBox.form.heading2")}</span>
              </h4>
              <p className="MessageBox__form-subheading">{t("MessageBox.form.message")}</p>
              <div className="MessageBox__input-group">
                <input
                  type="email"
                  className="MessageBox__input"
                  required
                  placeholder={t("MessageBox.form.placeholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button className="MessageBox__button" type="secondary" size="compact" onClick={() => {}}>
                  {t("MessageBox.form.button1")}
                  <span className="u-bold">{t("MessageBox.form.button2")}</span>
                </Button>
              </div>

              <div className="custom-checkbox-wrapper MessageBox__checkbox-wrapper">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  name="privacyPolicyCheckbox"
                  id="privacyPolicyCheckbox"
                  onChange={(e) => setIsCheckboxChecked(e.target.checked)}
                />
                <label htmlFor="privacyPolicyCheckbox" className="MessageBox__checkbox-label">
                  {t("MessageBox.form.checkbox1")}
                  <a href={`/${locale}/privacy`} target="_blank" rel="noopener noreferrer">
                    {t("MessageBox.form.checkbox2")}
                  </a>
                  {t("MessageBox.form.checkbox3")}
                </label>
              </div>
              {feedback && (
                <div className={`MessageBox__feedback MessageBox__feedback--${feedbackType}`}>{feedback}</div>
              )}
            </form>
          )}
        </div>
        <div className="MessageBox__decoline MessageBox__decoline--1"></div>
        <div className="MessageBox__decoline MessageBox__decoline--2"></div>
        <div className="MessageBox__decoline MessageBox__decoline--3"></div>
      </div>
    </div>
  );
}
