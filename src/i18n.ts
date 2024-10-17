import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Example translations
const resources = {
  en: {
    translation: {
      summer: "Summer sale all swim and free express delivery - off 50%!",
      shop: "Shop Now",
      exclusive: "Exclusive",
      home: "Home",
      about: "About",
      contact: "Contact",
      signup: "Sign Up",
    },
  },
  ar: {
    translation: {
      summer: "عروض الصيف خالي وتوصيل التسوق مجاني - خصم 50%!",
      shop: "تسوق الان",
      exclusive: "الحصري",
      home: "الصفحة الرئيسية",
      about: "معلومات عنا",
      contact: "اتصل بنا",
      signup: "انشاء حساب",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
