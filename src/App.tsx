import { SetStateAction, useState } from 'react'

import './App.css'
import Preview from './components/Preview'
import InputBox from './components/InputBox'

function App() {
  const [input, setInput] = useState("");

  const setValueInput = (value: SetStateAction<string>) => {
    setInput(value);
  };

  return (
    <>
    <InputBox setValueInput={setValueInput}/>
    <Preview input={input} />     
    </>
  )
}

export default App
