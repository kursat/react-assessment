import React from 'react';
import { decrement, increment } from '../redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const SamplePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const count = useAppSelector((state) => state.counter.value);

  return (
    <div>
      Sample Page
      <p className={'counter'}>{count}</p>
      <button
        className="bg-blue-800 hover:bg-blue-500 active:bg-blue-600 transition-all text-white p-1 m-1 w-20 h-20 rounded-xl text-2xl"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        className="bg-red-800 hover:bg-red-500 active:bg-red-600 transition-all text-white p-1 m-1 w-20 h-20 rounded-xl text-2xl"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
};

export default SamplePage;
