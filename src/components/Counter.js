import { useEffect, useState } from "react";

const useCounter = (initialValue, operation) => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prevValue) => (operation ? prevValue + 1 : prevValue - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [operation]);
  return value;
};

export default useCounter;
