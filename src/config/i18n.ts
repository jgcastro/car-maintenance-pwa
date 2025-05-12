import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend"; // To load translations from /public/locales

i18n
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// load translation using http -> see /public/locales
	// (i.e. https://github.com/i18next/i18next-http-backend)
	.use(HttpApi)
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		supportedLngs: ["en", "es"], // Supported languages
		fallbackLng: "es", // Fallback language - Spanish for Costa Rica default
		debug: import.meta.env.DEV, // Enable debug output in development mode

		detection: {
			// order and from where user language should be detected
			order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
			// keys or params to lookup language from
			caches: ["localStorage"], // Where to cache the detected language
		},

		backend: {
			loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to your translation files
			// Note: {{ns}} is for "namespaces", defaults to "translation"
		},

		interpolation: {
			escapeValue: false, // React already protects from XSS.
		},

		// react-i18next specific options
		// reaplace it with react: {} in v22.0.0
		react: {
			useSuspense: true, // Recommended for better UX with async translation loading
		},
	});

export default i18n;
