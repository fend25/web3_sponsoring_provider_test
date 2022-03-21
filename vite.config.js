import {defineConfig} from 'vite'

export default defineConfig((config) => ({
  resolve: {
    alias: {
      process: 'process',
      stream: 'stream-browserify',
      zlib: "browserify-zlib",
      util: 'util',
      https: 'https-browserify',
      http: 'stream-http',
      crypto: 'crypto-browserify',
      assert: 'assert',
      url: 'url',
      os: 'os-browserify',
    }
  }
}))
