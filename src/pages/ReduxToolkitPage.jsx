import CounterRTK from "../features/counter/CounterRTK";
import AppLayout from "../components/AppLayout";
import PageHeading from "../components/PageHeading";
import CodeSnippet from "../components/CodeSnippet";
import { Provider } from "react-redux";
import { store } from "../redux-app/RTK/store"; // RTK store

export default function ReduxToolkitPage() {
  return (
    <>
      <AppLayout
        children={
          <>
            {" "}
            <PageHeading>Redux Toolkit (RTK)</PageHeading>
            {/* <h2>Redux Toolkit (RTK)</h2> */}
            <p>
              Redux Toolkit is the modern, recommended way to use Redux.
              <br />
              It reduces boilerplate, creates actions automatically, and makes
              reducers easier to write.
            </p>
            <h2 className="pt-4">Implementation</h2>
            <h3>Step 1: Create the Slice</h3>
            <p className="mb-2">A slice contains:</p>
            <ul>
              <li>the state</li>
              <li>the reducers</li>
              <li>and the auto-generated actions</li>
            </ul>
            <p>All inside one file, using createSlice.</p>
            <h4 className="mb-2">Code</h4>
            <CodeSnippet>{`// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    }
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
`}</CodeSnippet>
            <h4>What this means?</h4>
            <p className="mb-2">RTK automatically creates:</p>
            <ul>
              <li>action types</li>
              <li>action creators</li>
              <li>reducer logic based on these functions</li>
            </ul>
            <p>No switch-case, no manual types.</p>
            <h3 className="pt-4">Step 2: Create the Store</h3>
            <p>Use configureStore (RTK's replacement for createStore).</p>
            <h4 className="mb-2">Code</h4>
            <CodeSnippet>
              {`// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});`}
            </CodeSnippet>
            <p className="mb-2">RTK automatically sets up:</p>
            <ul>
              <li>Redux DevTools</li>
              <li>Thunk middleware</li>
              <li>Good defaults</li>
            </ul>
            <h3 className="pt-4">Step 3: Wrap the {`<App/>`} with Provider</h3>
            <p>
              Same as classic Redux:
              <br />
              Your entire app needs access to the store.
            </p>
            <h4 className="mb-2">Code</h4>
            <CodeSnippet>
              {`// index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);`}
            </CodeSnippet>
            <h3 className="pt-4">Step 4: Create the Counter Component</h3>
            <p>Use RTK-generated actions + useSelector + useDispatch.</p>
            <h4 className="mb-2">Code</h4>
            <CodeSnippet>{`// CounterRTK.jsx
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

export default function CounterRTK() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {value}</p>

      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}`}</CodeSnippet>
            <h3 className="pt-4">Step 5: Add More Slices (optional)</h3>
            <p>
              Just like combineReducers, RTK lets you add more slices easily.
            </p>
            <h4 className="mb-2">Example: Multiple slices</h4>
            <CodeSnippet>{`// store.js with multiple slices
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import todosReducer from "./todosSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // state.counter
    todos: todosReducer      // state.todos
  }
});`}</CodeSnippet>
            <p className="mb-2">Your RTK state will look like:</p>
            <CodeSnippet>
              {`{
  counter: { value: 0 },
  todos: { list: [] }
}
`}
            </CodeSnippet>
            <p className="mb-2">Selectors match the structure:</p>
            <CodeSnippet>
              {`const value = useSelector(state => state.counter.value);
const todos = useSelector(state => state.todos.list);`}
            </CodeSnippet>
          </>
        }
        demo={
          <>
            <h3>Redux Counter Demo</h3>
            <Provider store={store}>
              <CounterRTK />
            </Provider>

            <h4>Redux Toolkit simplifies Redux.</h4>
            <ul className="list list-decimal">
              <li>createSlice() combines reducers + actions into one file</li>
              <li>configureStore() replaces createStore()</li>
              <li>No switch-cases, no manual action types</li>
              <li>Reducers use “mutable” syntax with Immer</li>
            </ul>
          </>
        }
      ></AppLayout>
    </>
  );
}
