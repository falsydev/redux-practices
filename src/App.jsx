import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import StatePage from "./pages/StatePage";
import ReduxPage from "./pages/ReduxPage";
import ReduxToolkitPage from "./pages/ReduxToolkitPage";
import "./index.css";
import Layout from "./components/Layout";
import { LINKS } from "./data/LINKS";
import BreadCrumb from "./components/BreadCrumb";
import { Link } from "react-router-dom";
import PageHeading from "./components/PageHeading";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <Layout>
      <PageHeading tag="div" showHome="true">
        State Management in React
      </PageHeading>
      <BreadCrumb>
        {LINKS.map((item) => {
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`text-blue-100 no-underline font-semibold px-2 ${
                item.path === location.pathname
                  ? "bg-gray-500 hover:no-underline cursor-default"
                  : "hover:underline"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </BreadCrumb>
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
