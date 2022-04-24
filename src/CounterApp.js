import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState(initialValue);

  const handlerAdd = () => {
    setCounter(counter + 1);
  };
  const handlerReset = () => {
    setCounter(initialValue);
  };
  const handlerSubstract = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handlerAdd}>+ 1</button>
      <button onClick={handlerReset}>RESET</button>
      <button onClick={handlerSubstract}>- 1</button>
    </>
  );
};

CounterApp.propTypes = {
  initialValue: PropTypes.number,
};

export default CounterApp;
