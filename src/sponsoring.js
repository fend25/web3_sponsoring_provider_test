import Web3 from 'web3'
import SponsoringProvider from 'web3-provider-sponsoring';

export const testWeb3 = async () => {
  console.log('[COMMON WEB3 TEST] Starting Web3...')
  //const Web3 = (await import('web3')).default
  const web3 = new Web3('https://rpc-opal.unique.network/')
  const opalChainId = await web3.eth.getChainId()
  console.log(`%c[COMMON WEB3 TEST] Success. Opal chain id is: ${opalChainId}`, "color:lightgreen")
}

export const testSponsoring = async () => {
  console.log('[METAMASK WEB3 TEST] Starting Web3...')
  const web3 = new Web3(new SponsoringProvider(window.ethereum));
  const opalChainId = await web3.eth.getChainId()
  console.log(`%c[METAMASK WEB3 TEST] Success. Chain id for web3 from metamask is: ${opalChainId}`, "color:lightgreen")

  // please do web3 sponsoring test here
}
