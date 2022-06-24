import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ["@ethersproject", "ethers"]
  },
  vite: {
    optimizeDeps: {
      include: ['bn.js', 'js-sha3', 'hash.js', 'aes-js', 'scrypt-js', 'bech32'],
    },
  },
  alias: {
    '@imtbl/imx-sdk':'@imtbl/imx-sdk/dist/index.cjs.js',
  },
  ssr: false,
})
