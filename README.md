# web3-provider-sponsoring test lib

built on pure vite

pure js, no typescript (yet)

### Usage

1. Install dependencies and set .env:
   1. `yarn`
   2. `cp .env.example .env` and then check that .env is ok for you
2. To run in dev mode: `yarn dev`, then open browser at [localhost:3000](http://localhost:3000)
3. To build:
   1. `yarn build`
   2. `yarn serve`, then open browser at [localhost:3000](http://localhost:3000)

After build, folder `dist` may be served any preferrable way, 
for example `yarn serve` from this package.
Or via nginx or any other web server.


<details>
<summary>additional yarn info</summary>

```bash
yarn add process buffer events @polkadot/api @polkadot/util-crypto web3 && yarn add -D vite-compatible-readable-stream browserify-zlib util https-browserify stream-http crypto-browserify assert url os-browserify
```
   
</details>
