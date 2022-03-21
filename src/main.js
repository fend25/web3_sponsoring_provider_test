import './style.css'
import {testWeb3, testSponsoring} from './sponsoring.js'

const app = document.querySelector('#app')

app.innerHTML = `
  <h1>Hello!</h1>
`

// testWeb3().catch(err => console.error('[COMMON WEB3 TEST]', err))
testSponsoring().catch(err => console.error('[METAMASK WEB3 TEST]', err))
