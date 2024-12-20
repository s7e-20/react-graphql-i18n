import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router";

export function LanguageOutlet() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  React.useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return <Outlet />;
};
