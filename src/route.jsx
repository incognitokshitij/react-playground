import debounce from "./debounce";
import { Routes, Route, Link } from "react-router-dom";

let pages = [{ name: "debounce", path: "/debounce", component: debounce }];

function Home() {
  return (
    <ul>
      {pages.map((page) => (
        <li key={page.name}>
          <Link to={page.path}>{page.name}</Link>
        </li>
      ))}
    </ul>
  );
}

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {pages.map((page) => (
        <Route key={page.name} path={page.path} element={<page.component />} />
      ))}
    </Routes>
  );
}

export default RoutesPage;