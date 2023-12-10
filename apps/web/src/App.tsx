import {
  provideFASTDesignSystem,
  fastTextField,
  fastButton
} from '@microsoft/fast-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import React from 'react';

const { wrap } = provideReactWrapper(
  React,
  provideFASTDesignSystem()
);

export const FastTextField = wrap(fastTextField());
export const FastButton = wrap(fastButton());

function clicked() {
  return;
}

function App() {
  return (
    <>
      <FastTextField placeholder='Enter a new task...'>
        What to do next?
      </FastTextField>
      <FastButton onClick={()=>{clicked();}}>Sumbit</FastButton>
    </>
  );
}

export default App;

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>What to do?</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/