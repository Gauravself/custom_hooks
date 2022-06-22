import React from "react";
import Card from "./UI/Card";
import useCounter from "./Counter";

const IncrementCounter = () => {
  const value = useCounter(0, true);
  return <Card>{value}</Card>;
};

export default IncrementCounter;
