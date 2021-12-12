import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }
  
  function decrementCounter() {
    if(counter > 0) {
      setCounter(counter - 1);
    }
  }

  const fruits = ["Avocado", "Apricot", "Strawberry", "Banana", "Peach"];

  const [inputText, setInputText] = useState(' ');
  function onInputChange(e) {
    setInputText(e.target.value);
    document.title = e.target.value;
  }
  
  return (
    <div className="App">
      
      <h1>Exercises</h1>

      <h3>Counter</h3>
      <div className="counter">
        <button className="decrement-btn" onClick={decrementCounter}>-</button>
        <div className="count">{counter}</div>
        <button className="increment-btn" onClick={incrementCounter}>+</button>
      </div>

      <h3>List</h3>
      <div className="list-field">
        <ul className="list">
          {fruits.map((fruit, index) => (
            <li className="list-item" key={index}>{fruit}</li>
          ))}
        </ul>
      </div>

      <h3>Input Element</h3>
      <div className="inputDisplay">
        <h3>You entered: {inputText}</h3>
        <input 
          type="text"  
          value={inputText}
          onChange={onInputChange}
          />
      </div>

    </div>
  );
}

export default App;
