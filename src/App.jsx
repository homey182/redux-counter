import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incresByAmout,
} from "./redux/features/counterSlice";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const [num, setNum] = useState();
  return (
    <div>
      <h1>{counter}</h1>

      <input
        value={num}
        onChange={(e) => setNum(e.target.value)}
        type="number"
      />

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement(num));
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          dispatch(incresByAmout(Number(num)));
        }}
      >
        increase by amount
      </button>
    </div>
  );
};

export default App;
