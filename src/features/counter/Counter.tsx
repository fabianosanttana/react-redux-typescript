import React, { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectStatus,
  resetCounter,
} from "./counterSlice";

import styles from "./Counter.module.css";

const Counter: React.FC = (): JSX.Element => {
  const count = useAppSelector(selectCount);
  const loading = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  useEffect(() => {
    if (loading === "loading") alert("loading");
    if (loading === "failed") alert("failed");
  }, [loading]);

  return (
    <div>
      <div className={styles.row}>
        <button
          type="button"
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value} data-testid="counter">
          {count}
        </span>
        <button
          type="button"
          className={styles.button}
          aria-label="Increment value"
          data-testid="btn-increment-value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          data-testid="input-increment-custom-value"
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          type="button"
          className={styles.button}
          data-testid="btn-increment-custom-value"
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          type="button"
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
        <button
          type="button"
          className={styles.button}
          data-testid="btn-reset-value"
          onClick={() => dispatch(resetCounter())}
        >
          Reset counter
        </button>
      </div>
    </div>
  );
};

export default Counter;
