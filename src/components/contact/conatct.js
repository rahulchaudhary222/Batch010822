import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../../redux/reducer";

const Contact = () => {
  const dispatch = useDispatch();
  const Name = useSelector((state) => state.counter.name);
  const Counter = useSelector((state) => state.counter.value);
  return (
    <div>
      <h3>{Name}</h3>
      <h2>{Counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
export default Contact;
