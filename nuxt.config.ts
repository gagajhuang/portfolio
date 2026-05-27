// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from 'path';
export default defineNuxtConfig({
  compatibilityDate: "2025-05-05",
  devtools: { enabled: true },

  // 全站啟用 SSR（預設）
  ssr: true,

  app: {
    baseURL: "/powerful-ad.com/gaga_Jhuang/profile/",
    head: {
      title: "Gaga's profile",
      htmlAttrs: {
        lang: "zh-Hant-TW",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "網站描述" },
        { name: "keywords", content: "Nuxt, Vue, 前端, SEO" },
        { name: "format-detection", content: "telephone=no" },

        // Open Graph (Facebook / LINE)
        { property: "og:type", content: "website" },
        { property: "og:title", content: "網站標題" },
        { property: "og:description", content: "網站簡介描述" },
        { property: "og:image", content: "/image/pc/main/shareImg.png" },
        { property: "og:url", content: "https://你的網址.com" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "網站標題" },
        { name: "twitter:description", content: "網站簡介描述" },
        { name: "twitter:image", content: "/image/pc/main/shareImg.png" },
      ],
      link: [
        // Favicon — 改用 app.vue 的 useHead() 動態帶入 baseURL
        // { rel: "icon", type: "image/png", href: "/favicon.ico" },
        // Apple Touch Icon
        // { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        // 其他裝置支援
        // { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          charset: false,
          additionalData: `
          @use "@/assets/css/main" as *;
          `,
        },
      },
    },
  },

  modules: ["@nuxtjs/i18n", "@nuxtjs/google-fonts", "nuxt-swiper"],

  i18n: {
    strategy: "prefix",
    // langDir: resolve('./locales'),
    langDir: "../locales/",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
      },
      {
        code: "zh",
        iso: "zh-TW",
        file: "zh.json",
      },
    ],
    defaultLocale: "zh",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  googleFonts: {
    families: {
      "Noto Sans TC": {
        wght: "200..900",
        ital: "200..700",
      },

      // 'Mulish': {
      //   wght: '200..900',
      //   ital: '200..700',
      // },
      "Noto Serif SC": true,
      "Roboto": {
        wght: "300..900",
      },
    },
  },
});
