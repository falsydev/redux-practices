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
            <h2 className="pt-4">Implementation</h2>
            <h3>Step 1: Create reducer.js</h3>
            <p>A reducer is a pure function that receives:</p>
            <ul>
              <li>the current state</li>
              <li>an action object</li>
            </ul>
            <p>…and returns the new state.</p>
            <p>
              Reducers decide how the state should change based on the action’s
              type.
            </p>
            <h4 className="mb-2">Code</h4>
            <CodeSnippet>{`// reducer.js
export default function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
`}</CodeSnippet>
            <p>
              If you’re new to reducers, see the React reducer explanation at{" "}
              <a
                href="https://react.dev/learn/extracting-state-logic-into-a-reducer"
                target="_blank"
              >
                https://react.dev/learn/extracting-state-logic-into-a-reducer
              </a>
            </p>
            <h3 className="pt-4">Step 2: Create store.js</h3>
            <p>The store is the single place where all Redux state lives.</p>
            <ul>
              <li>It holds the current state</li>
              <li>It allows components to subscribe to updates</li>
              <li>It processes dispatched actions using the reducer</li>
            </ul>
            <p>
              In classic Redux, you create the store by passing your reducer to
              createStore.
            </p>
            <h4 className="mb-2">Code</h4>
            <CodeSnippet>
              {`import {createStore} from "redux";
import counterReducer from "./reducer";

export const store = createStore(counterReducer);`}
            </CodeSnippet>
            <h3 className="pt-4">Step 3: Wrap the {`<App/>`} with Provider</h3>
            <p>React components cannot access Redux directly.</p>
            <p>
              To connect React with Redux, wrap your entire application with{" "}
              {`<Provider>`}.
            </p>{" "}
            <h4 className="mb-2">Code</h4>
            <CodeSnippet>
              {`import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);`}
            </CodeSnippet>
            <p>
              The Provider component makes the Redux store available to every
              component in the app.
            </p>
            <h3 className="pt-4">Step 4: Create Counter component</h3>
            <p>Inside your component:</p>
            <ul>
              <li>Use useSelector to read data from the Redux store</li>
              <li>Use useDispatch to send actions to the store</li>
            </ul>
            <p>
              When you dispatch an action, Redux calls the reducer → updates
              state → and React re-renders automatically.
            </p>
            <p>
              This lets your component display the current state and update it
              without using local useState.
            </p>{" "}
            <h4 className="mb-2">Code</h4>
            <CodeSnippet>{`import { useSelector, useDispatch } from "react-redux";

export default function CounterRedux() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}`}</CodeSnippet>{" "}
            <h3 className="pt-4">Step 5: Add more reducers later (optional)</h3>
            <p>
              As your app grows, you can split logic into multiple reducers and
              combine them using combineReducers.
            </p>
            <p>
              Each key in combineReducers() becomes a top-level key in your
              state tree.
            </p>
            <h4 className="mb-2">Example: Combining reducers</h4>
            <CodeSnippet>{`import { createStore, combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todosReducer from "./todosReducer";

const rootReducer = combineReducers({
  counter: counterReducer, // state.counter
  todos: todosReducer      // state.todos
});

export const store = createStore(rootReducer);`}</CodeSnippet>
            <p className="mb-2">Your Redux state will now look like:</p>
            <CodeSnippet>
              {`{
  counter: { value: 0 },
  todos: { value: [] }
}
`}
            </CodeSnippet>
            <p className="mb-2">Accessing them with useSelector</p>
            <CodeSnippet>
              {`const count = useSelector(state => state.counter.value);
const todos = useSelector(state => state.todos.value);`}
            </CodeSnippet>
          </>
        }
        demo={
          <>
            <h3>Redux Counter Demo</h3>
            <CounterRedux />
            <h4>Steps to implement</h4>
            <ul className="list list-decimal">
              <li>Create the Reducer (state logic)</li>
              <li>Create the Store (global state container)</li>
              <li>Provide the Store to React (wrap with Provider)</li>
              <li>Build the Counter Component (useSelector + useDispatch)</li>
            </ul>
          </>
        }
      ></AppLayout>
    </>
  );
}
