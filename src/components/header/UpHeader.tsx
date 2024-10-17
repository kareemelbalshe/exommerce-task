/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../lib/hooks/ThemeContext";

const UpHeader = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n.language]);

  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className={`flex flex-col lg:flex-row justify-around items-center ${
        isDarkMode ? "bg-slate-800" : "bg-black"
      } text-white py-5 gap-3`}
    >
      <div
        className={`relative w-16 h-8 rounded-full cursor-pointer ${
          isDarkMode ? "bg-gray-600" : "bg-white"
        }`}
        onClick={toggleDarkMode}
        role="button"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === "Enter") toggleDarkMode();
        }}
      >
        <div
          className={`absolute top-1 w-6 h-6 bg-black rounded-full transition-all duration-300 ${
            isDarkMode ? "right-1" : "left-1"
          }`}
        ></div>
      </div>
      <p className="text-center">
        {t("summer")}{" "}
        <span className="font-bold underline cursor-pointer ml-2">
          {t("shop")}
        </span>
      </p>

      <select
        className={`${
          !isDarkMode ? "bg-black" : "bg-gray-800"
        } text-white border-none outline-none cursor-pointer`}
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}
      >
        <option value="en">English</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
};

export default UpHeader;
