import { useState } from "react";

export const useCounter = (initialValue = 1) => {
  const [count, setCount] = useState(initialValue);

  const dec = () => {
    setCount(count - 1);
  };

  const inc = () => {
    setCount(count + 1);
  };

  return [count, inc, dec];
};
