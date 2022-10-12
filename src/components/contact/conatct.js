import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../../redux/reducer";
import Xyz from "../about/aboutcard/about";
const Contact = () => {
  const dispatch = useDispatch();
  const Name = useSelector((state) => state.counter.name);
  const Counter = useSelector((state) => state.counter.value);
  const AGE = useSelector((state) => state.user.age);
  const [inputVal, setInputVal] = useState(0);

  return (
    <div>
      <h3>{Name}</h3>
      <h2>{Counter}</h2>
      <h2>{AGE}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input
        value={inputVal}
        type="number"
        onChange={(event) => setInputVal(event.target.value)}
      ></input>
      <button
        onClick={() => {
          //dispatch(incrementByAmount(Number(inputVal)));
          dispatch({ type: "counter/incrementByAmount", payload: 55 });
        }}
      >
        add amount
      </button>
    </div>
  );
};
export default Contact;
