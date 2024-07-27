import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url: URL) {
  const pathname = url.pathname;
  let lang = pathname.split("/")[1];

  lang = lang.replace("-", "_");

  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
