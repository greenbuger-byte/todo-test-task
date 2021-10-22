import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./langs/ru"
const resources = {
    ru: {
        translation: ru
    },
    fr: {
        translation:
            {      "Welqweqecome to React": "Bienvenue à React et react-i18next"    }
    }
};
i18n.use(initReactI18next)
    .init({
        resources,
        lng: "ru",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;