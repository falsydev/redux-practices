import React from "react";
import CounterSlice from "../features/counter/CounterRedux";
import AppLayout from "../components/AppLayout";
import PageHeading from "../components/PageHeading";
import CodeSnippet from "../components/CodeSnippet";

export default function ReduxToolkitPage() {
  return (
    <>
      <PageHeading>Redux Toolkit - Slice</PageHeading>
      <AppLayout
        children={
          <>
            <h2 className="text-2xl font-bold mb-4">Step 1: Create a Store</h2>
            <p>
              Store holds the entire application state in a single JavaScript
              object tree.
            </p>
          </>
        }
        demo={
          <>
            <h3>Demo</h3>
            <CounterSlice />
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
