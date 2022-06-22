import React from "react";
import Card from "./UI/Card";
import useCounter from "./Counter";

const DecrementCounter = () => {
  const value = useCounter(0, false);
  return <Card>{value}</Card>;
};

export default DecrementCounter;
