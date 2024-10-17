import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const useLang = () => {
  const { i18n } = useTranslation();
  const [isEn, setIsEn] = useState(true);
  useEffect(() => {
    if (i18n.language === "ar") {
      setIsEn(false);
    } else {
      setIsEn(true);
    }
  }, [i18n.language]);
  return { isEn };
};
