import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import StatePage from "./pages/StatePage";
import ReduxPage from "./pages/ReduxPage";
import ReduxToolkitPage from "./pages/ReduxToolkitPage";
import "./index.css";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/state" element={<StatePage />} />
        <Route path="/redux" element={<ReduxPage />} />
        <Route path="/redux-toolkit" element={<ReduxToolkitPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
