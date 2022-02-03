import React from 'react';
import { decrement, increment } from '../redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const SamplePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const count = useAppSelector((state) => state.counter.value);

  return (
    <div>
      Sample Page
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default SamplePage;
