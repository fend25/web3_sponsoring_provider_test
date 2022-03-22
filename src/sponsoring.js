import Web3 from 'web3'
import SponsoringProvider from 'web3-provider-sponsoring'

import {addressToEvm} from '@polkadot/util-crypto'

export const testWeb3 = async () => {
  //const Web3 = (await import('web3')).default
  console.log('[WEB3 UTILS TEST] Converting Substrate address to Ethereum one')
  const subAddress = '5CS5sKQJUayBkTzVTAmUFvTefJJTCJrDqMazDTue2bVRNydk'
  const intermediateEthAddress = '0x' + Buffer.from(addressToEvm(subAddress)).toString('hex')
  const ethAddress = Web3.utils.toChecksumAddress(intermediateEthAddress)
  console.log(`%c[WEB3 UTILS TEST] ADDRESS CONVERSION SUCCESS. ${subAddress} => ${ethAddress}`, "color:lightgreen")

  console.log('[RPC WEB3 TEST] Starting Web3...')
  const ethRpcUrl = import.meta.env.VITE_ETH_RPC_URL ?? 'https://rpc-opal.unique.network/'
  const web3_rpc = new Web3(ethRpcUrl)
  const opalChainIdFromRpc = await web3_rpc.eth.getChainId()
  console.log(`%c[RPC WEB3 TEST] Success. ${ethRpcUrl} chain id is: ${opalChainIdFromRpc}`, "color:lightgreen")
}

export const testSponsoring = async () => {
  console.log('[METAMASK WEB3 TEST] Starting Web3...')
  const web3 = new Web3(new SponsoringProvider(window.ethereum));
  const opalChainId = await web3.eth.getChainId()
  console.log(`%c[METAMASK WEB3 TEST] Success. Chain id for web3 from metamask is: ${opalChainId}`, "color:lightgreen")

  // please do web3 sponsoring test here
}
