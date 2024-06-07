import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";

function App() {
  // let inputRef = useRef();
  let dispatch = useDispatch();
  let storeObj = useSelector((store) => {
    return store;
  });
  let [inputValue, setInputValue] = useState();

  return (
    <div className="App">
      <input
        // ref={inputRef}
        value={inputValue}
        onChange={(evntObj) => setInputValue(evntObj.target.value)}
        placeholder="Enter name"
      ></input>
      <button
        type="button"
        onClick={() => {
          // dispatch({ type: "addBollyActors", data: inputRef.current.value });
          let value = inputValue.trim();
          if (value) {
            dispatch({ type: "addBollyActors", data: value });
            setInputValue(""); // Reset input field
          }
        }}
      >
        Add BollyActor
      </button>
      <button
        type="button"
        onClick={() => {
          // dispatch({ type: "addTollyActors", data: inputRef.current.value });
          let value = inputValue.trim();
          if (value) {
            dispatch({ type: "addTollyActors", data: value });
            setInputValue(""); // Reset input field
          }
        }}
      >
        Add TollyActor
      </button>
      <button
        type="button"
        onClick={() => {
          // dispatch({ type: "addCricketers", data: inputRef.current.value });
          let value = inputValue.trim();
          if (value) {
            dispatch({ type: "addCricketers", data: value });
            setInputValue(""); // Reset input field
          }
        }}
      >
        Add Cricketers
      </button>
      <br></br>
      <br></br>
      <br></br>
      <h3>BollyWoodActors: {storeObj.bollyActors.join()}</h3>
      <h3>TollyWoodActors: {storeObj.tollyActors.join()}</h3>
      <h3>Cricketers: {storeObj.cricketers.join()}</h3>
    </div>
  );
}

export default App;
