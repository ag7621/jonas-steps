import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="steps">
      <div className="numbers">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <p className="message">:D</p>

      <div className="buttons">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default App;
