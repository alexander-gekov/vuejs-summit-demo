// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_API_KEY,
  },
  devtools: { enabled: true }
})
