import { useCounter } from "../hooks/useCounter";

export const CounterCustomHook = () => {
  const { counter } = useCounter();

  return (
    <>
      <h1 className="text-2xl font-bold">Counter with hooks: {counter}</h1>
      <hr />
      <br />
      <button className="btn btn-success mr-1">+1</button>
      <button className="btn btn-success mr-1">Reset</button>
      <button className="btn btn-success mr-1">-1</button>
    </>
  );
};
