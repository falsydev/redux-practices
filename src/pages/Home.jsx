import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import PageHeading from "../components/PageHeading";
import { useState } from "react";

function Home() {
  const [status, setStatus] = useState("Details show up here.");

  function handleStatus(el) {
    let newStatus = "";
    if (el === "reset") {
      newStatus = "Details show up here.";
    } else if (el === "state") {
      newStatus = "Standard React useState()";
    } else if (el === "redux-basic") {
      newStatus = "Redux Basic State";
    }

    setStatus(newStatus);
  }

  return (
    <>
      <PageHeading>State Management in React</PageHeading>
      <AppLayout
        children={
          <>
            <h2>Common Methods</h2>
            <div className="mb-2">
              <Link
                to="/state"
                className="text-blue-100 font-semibold hover:underline"
                onMouseOver={() => handleStatus("state")}
                onMouseOut={() => handleStatus("reset")}
              >
                useState
              </Link>
            </div>
            <div className="mb-2">
              <Link
                to="/redux"
                className="text-blue-100 font-semibold hover:underline"
                onMouseOver={() => handleStatus("redux-basic")}
                onMouseOut={() => handleStatus("reset")}
              >
                Redux
              </Link>
            </div>
            <div className="mb-2">
              <Link
                to="/redux-toolkit"
                className="text-blue-100 font-semibold hover:underline"
                onMouseOver={() => handleStatus("redux-basic")}
                onMouseOut={() => handleStatus("reset")}
              >
                Redux Toolkit
              </Link>
            </div>
            <div className="mb-2">
              <Link
                to="/redux-saga"
                className="text-blue-100 font-semibold hover:underline"
                onMouseOver={() => handleStatus("redux-basic")}
                onMouseOut={() => handleStatus("reset")}
              >
                Redux Saga
              </Link>
            </div>
            <hr className="my-5 text-gray-400" />
            <h2>What is State?</h2>
            <p>State is just data that can change over time.</p>
            <p>
              In a React app, state decides what the UI should show right now.
              <br />
              When the state changes, the UI updates automatically.
            </p>
            <p className="mb-1">Examples of state:</p>
            <ul>
              <li>A number in a counter</li>
              <li>Text inside an input box</li>
              <li>A list of users</li>
              <li>Whether a modal is open or closed</li>
            </ul>
            <p>State represents the current situation of your app.</p>
            <p>
              If the state changes → the screen changes. <br />
              If the state stays the same → the screen stays the same.
            </p>
            <p>That&rsquo;s all state means.</p>
          </>
        }
        demo={<p className="text-gray-400">{status}</p>}
      ></AppLayout>
    </>
  );
}

export default Home;
