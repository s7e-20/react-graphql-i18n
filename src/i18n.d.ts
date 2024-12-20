import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: {
        login: {
          welcome: string;
          email: string;
          password: string;
          submit: string;
        };
      };
    };
  }
}
