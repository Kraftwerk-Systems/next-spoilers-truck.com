"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo, useEffect } from "react";

// Interfaces for the props
interface TruckCategory {
  id: string;
  name: string;
  averageConsumption: number; // in liters/100km
  typicalSpoilerPrice: number;
  typicalYearlyMileage: number; // in km
  typicalSpoilerFuelSavingsPercentage: number; // in percentage
}

interface Currency {
  id: string;
  name: string;
  shortCode: string; // e.g. EUR, USD
  exchangeRateToEUR: number;
}

interface ROICalculatorProps {
  truckCategories: TruckCategory[];
  currencies: Currency[];
  netFuelPricePerLitre: number;
  locale: string;
}

const getInitialCurrency = (currencies: Currency[], language: string): Currency | undefined => {
  const currencyMap: { [key: string]: string } = { hu: "HUF", ro: "RON" };
  const defaultCurrency = "EUR";
  const currencyCode = currencyMap[language] || defaultCurrency;
  return currencies.find((currency) => currency.shortCode === currencyCode);
};

export default function ROICalculator({
  truckCategories,
  currencies,
  netFuelPricePerLitre,
  locale,
}: ROICalculatorProps) {
  const t = useTranslations("common");
  // Initial states
  const initialCurrency = useMemo(() => getInitialCurrency(currencies, locale), [currencies, locale]);

  const [selectedTruckCategory, setSelectedTruckCategory] = useState<TruckCategory | undefined>(truckCategories[0]);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | undefined>(initialCurrency);

  const [yearlyMileage, setYearlyMileage] = useState<string>(
    selectedTruckCategory?.typicalYearlyMileage.toString() || "50000"
  );

  const [averageConsumption, setAverageConsumption] = useState<string>(
    selectedTruckCategory?.averageConsumption.toString() || "15"
  );

  const [fuelPrice, setFuelPrice] = useState<string>(netFuelPricePerLitre.toString());

  const yearlyMileageNumber = parseFloat(yearlyMileage);
  const averageConsumptionNumber = parseFloat(averageConsumption);
  const fuelPriceNumber = parseFloat(fuelPrice);

  // Event handlers
  const handleTruckCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const truckCategory = truckCategories.find((tc: TruckCategory) => tc.id === event.target.value);
    setSelectedTruckCategory(truckCategory);
    if (truckCategory) {
      setAverageConsumption(truckCategory.averageConsumption.toString());
      setYearlyMileage(truckCategory.typicalYearlyMileage.toString());
    }
  };

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = currencies.find((c) => c.id === event.target.value);
    setSelectedCurrency(newCurrency);

    if (newCurrency && selectedCurrency) {
      // Convert the current fuel price back to EUR before applying the new exchange rate
      const fuelPriceInEUR = parseFloat(fuelPrice) / selectedCurrency.exchangeRateToEUR;
      const newFuelPrice = fuelPriceInEUR * newCurrency.exchangeRateToEUR;

      // Round to 3 digits after the decimal point and convert back to number
      const roundedFuelPrice = parseFloat(newFuelPrice.toFixed(3));

      setFuelPrice(roundedFuelPrice.toString());
    }
  };

  const handleYearlyMileageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYearlyMileage(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace") {
      setFuelPrice(""); // Clear the input field
      event.preventDefault(); // Prevent the default backspace behavior
    }
  };

  const handleYearlyMileageBlur = () => {
    if (yearlyMileageNumber < 5000) {
      setYearlyMileage("5000");
    }
  };

  function dailyMilage() {
    return yearlyMileageNumber / 360;
  }

  function dailyFuelConsumption() {
    return (dailyMilage() / 100) * averageConsumptionNumber;
  }

  function dailySavingsLitres() {
    return (dailyFuelConsumption() * (selectedTruckCategory?.typicalSpoilerFuelSavingsPercentage ?? 5)) / 100;
  }

  function dailyFuelSaving() {
    return (dailySavingsLitres() * fuelPriceNumber) / (selectedCurrency?.exchangeRateToEUR ?? 1);
  }

  function paybackDays() {
    return (selectedTruckCategory?.typicalSpoilerPrice ?? 10000) / dailyFuelSaving();
  }

  interface PaybackPeriod {
    years: number;
    months: number;
    days: number;
  }

  function calculatePaybackPeriod(): PaybackPeriod {
    if (paybackDays() > 3600) {
      return {
        years: -1,
        months: -1,
        days: -1,
      };
    }
    const initialDays = paybackDays();
    const years = !Number.isFinite(Math.floor(initialDays / 360)) ? 0 : Math.floor(initialDays / 360);
    const daysAfterYears = initialDays % 360;
    const months = Number.isNaN(Math.floor(daysAfterYears / 30)) ? 0 : Math.floor(daysAfterYears / 30);
    const daysAfterMonths = daysAfterYears % 30;
    const days = Number.isNaN(Math.floor(daysAfterMonths)) ? 0 : Math.floor(daysAfterMonths);
    const payback = {
      years,
      months,
      days,
    };
    return payback;
  }

  function savingsPerYear() {
    return dailyFuelSaving() * 360;
  }

  const inflationRate = 0.05;
  const years = 5;

  function calculatePresentValueOfSavings(savingsPerYear: number, inflationRate: number, years: number) {
    let totalPresentValue = 0;

    for (let i = 1; i <= years; i++) {
      // Calculate the present value for each year's savings
      const presentValue = savingsPerYear / Math.pow(1 + inflationRate, i);
      totalPresentValue += presentValue;
    }

    totalPresentValue = Math.round(totalPresentValue * (selectedCurrency?.exchangeRateToEUR ?? 1));
    return totalPresentValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  useEffect(() => {
    if (initialCurrency) {
      const initialFuelPriceInCurrency = netFuelPricePerLitre * initialCurrency.exchangeRateToEUR;
      // Round to 3 digits after the decimal point
      const roundedInitialFuelPrice = parseFloat(initialFuelPriceInCurrency.toFixed(3));
      setFuelPrice(roundedInitialFuelPrice.toString());
    }
  }, [initialCurrency, netFuelPricePerLitre]);

  // A simple function to handle singular or plural forms
  function pluralize(count: number, singular: string, plural: string): string {
    return count === 1 ? singular : plural;
  }

  // Placeholder for the component return function
  return (
    <div className="ROICalculator">
      <div className="ROICalculator__form">
        <h2 className="ROICalculator__heading">{t("ROICalculator.title")}</h2>

        <label className="ROICalculator__label">{t("ROICalculator.label.truck")}</label>
        {/* Truck Category Dropdown */}
        <select
          value={selectedTruckCategory?.id}
          onChange={handleTruckCategoryChange}
          className="ROICalculator__select"
        >
          {truckCategories.map((category: TruckCategory) => (
            <option key={category.id} value={category.id}>
              {t(`ROICalculator.categories.${category.name}`)}
            </option>
          ))}
        </select>

        {/* Yearly Mileage Input */}
        <label className="ROICalculator__label">{t("ROICalculator.label.mileage")}</label>
        <input
          type="number"
          value={yearlyMileage}
          onChange={handleYearlyMileageChange}
          onBlur={handleYearlyMileageBlur}
          // Hide the number input arrows using CSS (see SCSS code below)
          className="ROICalculator__input ROICalculator__input--noArrows"
        />

        {/* Average Consumption Input (pre-filled) */}
        <label className="ROICalculator__label">{t("ROICalculator.label.fuelConsumption")}</label>
        <input
          type="text"
          value={averageConsumption}
          // This field should not be disabled to allow user interaction
          onChange={(e) =>
            setAverageConsumption(() => {
              let res = e.target.value;
              res = res.replace(/,/g, ".");
              return res;
            })
          }
          className="ROICalculator__input ROICalculator__input--noArrows"
        />

        {/* Currency Dropdown */}
        <label className="ROICalculator__label">{t("ROICalculator.label.currency")}</label>
        <select value={selectedCurrency?.id} onChange={handleCurrencyChange} className="ROICalculator__select">
          {currencies.map((currency: Currency) => (
            <option key={currency.id} value={currency.id}>
              {currency.name}
            </option>
          ))}
        </select>

        <label className="ROICalculator__label">{t("ROICalculator.label.litrePrice")}</label>
        {/* Fuel Price per Liter Input */}
        <input
          type="text"
          value={fuelPrice}
          onChange={(e) =>
            setFuelPrice(() => {
              let res = e.target.value;
              res = res.replace(/,/g, ".");
              return res;
            })
          }
          onKeyDown={handleKeyDown}
          className="ROICalculator__input ROICalculator__input--noArrows"
        />
      </div>
      <div className="ROICalculator__results">
        {selectedTruckCategory && selectedCurrency && (
          <>
            <div className="ROICalculator__resultGroup">
              <div className="ROICalculator__resultItem">
                {t("ROICalculator.results.spoilerPrice")}
                <span>
                  {(selectedTruckCategory.typicalSpoilerPrice * selectedCurrency.exchangeRateToEUR)
                    .toFixed(0)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                  {selectedCurrency.shortCode}
                </span>
              </div>
              <div className="ROICalculator__resultItem">
                {t("ROICalculator.results.fuelSavings")}
                <span>{selectedTruckCategory.typicalSpoilerFuelSavingsPercentage}%</span>
              </div>
            </div>

            <div className="ROICalculator__resultItem ROICalculator__resultItem--payback">
              {t("ROICalculator.results.payback")}
              <span>
                {calculatePaybackPeriod().years === -1 ? "10+" : calculatePaybackPeriod().years}{" "}
                <span>
                  {pluralize(
                    calculatePaybackPeriod().years,
                    t("ROICalculator.results.year"),
                    t("ROICalculator.results.years")
                  )}
                  ,
                </span>{" "}
                <br />
                {calculatePaybackPeriod().months === -1 ? "_" : calculatePaybackPeriod().months}{" "}
                <span>
                  {pluralize(
                    calculatePaybackPeriod().months,
                    t("ROICalculator.results.month"),
                    t("ROICalculator.results.months")
                  )}
                  ,
                </span>{" "}
                <br />
                {calculatePaybackPeriod().days === -1 ? "_" : calculatePaybackPeriod().days}{" "}
                <span>
                  {pluralize(
                    calculatePaybackPeriod().days,
                    t("ROICalculator.results.day"),
                    t("ROICalculator.results.days")
                  )}
                  .
                </span>
              </span>
            </div>

            <div className="ROICalculator__resultItem ROICalculator__resultItem--savings">
              <span>
                {t("ROICalculator.results.estimated")}
                <span style={{ color: "var(--success-500)", fontWeight: "700" }}>
                  {t("ROICalculator.results.savings")}
                </span>
                {t("ROICalculator.results.over5")}
              </span>
              ~{calculatePresentValueOfSavings(savingsPerYear(), inflationRate, years)} {selectedCurrency.shortCode}
              <div
                style={{
                  marginTop: "-.5rem",
                }}
              >
                <small
                  style={{
                    color: "var(--primary-600)",
                    fontSize: "var(--font-xs)",
                    textTransform: "none",
                    fontWeight: "400",
                    fontFamily: "'Hind Siliguri', sans-serif",
                  }}
                >
                  {t("ROICalculator.results.inflation")}
                </small>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
