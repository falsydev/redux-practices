import AppLayout from "../components/AppLayout";
import PageHeading from "../components/PageHeading";

function Home() {
  // const [status, setStatus] = useState("Details show up here.");

  // function handleStatus(el) {
  //   let newStatus = "";
  //   if (el === "reset") {
  //     newStatus = "Details show up here.";
  //   } else if (el === "state") {
  //     newStatus = "Standard React useState()";
  //   } else if (el === "redux-basic") {
  //     newStatus = "Redux Basic State";
  //   }

  //   setStatus(newStatus);
  // }

  return (
    <>
      <AppLayout
        children={
          <>
            {/* <hr className="my-5 text-gray-400" /> */}
            <PageHeading>What is State?</PageHeading>
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
