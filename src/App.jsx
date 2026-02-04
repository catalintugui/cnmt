import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 bg-neutral-900 text-white">
      <div className="flex gap-4">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="h-24 p-4 hover:drop-shadow-[0_0_2em_#646cffaa] transition-[filter]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-24 p-4 hover:drop-shadow-[0_0_2em_#61dafbaa] transition-[filter] motion-safe:animate-spin motion-reduce:animate-none" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-semibold">Vite + React</h1>
      <div className="p-8">
        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          className="rounded-lg border border-transparent px-5 py-2.5 text-sm font-medium bg-neutral-800 hover:border-[#646cff] transition-colors cursor-pointer"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="bg-neutral-800 px-1.5 py-0.5 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-neutral-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
