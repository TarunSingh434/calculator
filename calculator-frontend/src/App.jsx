import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString()); // Note: eval is not safe in real-world apps
    } catch {
      setInput('Error');
    }
  };

  const clear = () => setInput('');

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {'1234567890+-*/.'.split('').map((char) => (
          <button key={char} onClick={() => handleClick(char)}>{char}</button>
        ))}
        <button onClick={calculate}>=</button>
        <button onClick={clear}>C</button>
      </div>
    </div>
  );
}

export default App;

