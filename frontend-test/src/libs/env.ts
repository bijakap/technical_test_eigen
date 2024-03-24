interface CustomEnv extends ImportMetaEnv {
  VITE_NEWS_API_KEY: string;
  VITE_ENDPOINT_EVERYTHING: string;
  VITE_ENDPOINT_HEADLINE: string;
}

export const ENV: CustomEnv = import.meta.env as CustomEnv;
