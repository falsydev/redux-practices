import CounterLocal from "../features/counter/counterLocal";
import AppLayout from "../components/AppLayout";
import PageHeading from "../components/PageHeading";
import CodeSnippet from "../components/CodeSnippet";

export default function StatePage() {
  return (
    <>
      <PageHeading>useState</PageHeading>

      <AppLayout
        children={
          <>
            <h2>What is Local State?</h2>
            <p>
              Local state is data that lives inside a single component. You
              create it with useState and update it only from that component.
            </p>

            <h3>It works great when:</h3>
            <ul>
              <li>Only one component needs the value</li>
              <li>The logic is small and isolated</li>
              <li>No other part of the app depends on this data</li>
            </ul>

            <h3>It becomes difficult when:</h3>
            <ul>
              <li>Many components need the same data</li>
              <li>State must be shared deeply</li>
              <li>You start lifting state up too often</li>
            </ul>
            <p>
              This is why larger apps move from local state to global state
              tools like Context, Redux, RTK, Thunk, and Saga.
            </p>
            <p>
              That&rsquo;s when global state tools like Redux become useful.{" "}
            </p>

            <p>Local state is your foundation. Everything else builds on it.</p>
            <h4 className="mb-2">Code</h4>
            <CodeSnippet className="mb-4">{`import { useState } from "react";

export default function CounterLocal() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}`}</CodeSnippet>
          </>
        }
        demo={
          <>
            <h3>Local Counter Demo</h3>
            <CounterLocal />
          </>
        }
      ></AppLayout>
    </>
  );
}
