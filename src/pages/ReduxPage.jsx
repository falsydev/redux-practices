import React from "react";
import CounterRedux from "../features/counter/CounterRedux";
import AppLayout from "../components/AppLayout";
import PageHeading from "../components/PageHeading";
import CodeSnippet from "../components/CodeSnippet";

export default function ReduxPage() {
  return (
    <>
      <PageHeading>Redux</PageHeading>
      <AppLayout
        children={
          <>
            <h2>What is Redux State?</h2>
            <p>
              Redux state is global state stored in a single place called the
              store. Any component in your app can read it and update it —
              without passing props around.
            </p>
            <p>You change Redux state by:</p>
            <ul>
              <li>
                Dispatching an action (a plain object describing “what
                happened”)
              </li>
              <li>A reducer updates the state based on that action</li>
              <li>The UI re-renders automatically</li>
            </ul>
            <p>Redux is helpful when:</p>
            <ul>
              <li>Many components need the same data</li>
              <li>You want predictable, trackable updates</li>
              <li>You want one clean place to manage state</li>
            </ul>
            <h3>Step 1: Create a Store</h3>
            <p>
              Store holds the entire application state in a single JavaScript
              object tree.
            </p>
          </>
        }
        demo={
          <>
            <h3>Redux Counter Demo</h3>
            <CounterRedux />
            <ul className="list-inside list-disc">
              <li>create store (/store.js)</li>
              <li>setup provider (/index.js)</li>
              <li>create slice (/counterSlice.js)</li>
              <li>update reducers to the Store</li>
              <li>
                use react-redux hooks to get and set state values
                <br />
                (useSelector, useDispatch)
              </li>
            </ul>
            <h4 className="text-lg font-medium mt-5 mb-4">When to use?</h4>
            <p>When global state management is needed.</p>
          </>
        }
      ></AppLayout>
    </>
  );
}
