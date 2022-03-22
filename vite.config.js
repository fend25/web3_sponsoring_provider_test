import {defineConfig} from 'vite'

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig((config) => ({
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      process: 'process',
      'readable-stream': 'vite-compatible-readable-stream',
      zlib: 'browserify-zlib',
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
