import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { generateMnemonic } from "bip39";
import './App.css'
import { SolanaWallet } from './components/SolanaWallet';
import { EthWallet } from './components/EthWallet';

function App() {
  const [count, setCount] = useState(0)
  const [mnemonic, setMnemonic] = useState("");

  return (
    <>
      <button onClick={async function() {
      const mn = await generateMnemonic();
      setMnemonic(mn)
      }}>
          Create Seed Phrase
      </button>
      <input type="text" value={mnemonic}></input>

      <SolanaWallet />
      <hr />

      <EthWallet />
    </>
  )
}

export default App
