import DebounceWithUseEffect from "./debounce";
import DebounceWithoutUseEffect from "./debounce/debounceWithoutUseEffect";
import { Routes, Route, Link } from "react-router-dom";
import ThrottleWithUseEffect from "./throttle/index";

let pages = [
  {
    name: "debounce with useEffect",
    path: "/debounce-with-use-effect",
    component: DebounceWithUseEffect,
  },
  {
    name: "debounce without use effect",
    path: "/debounce-without-use-effect",
    component: DebounceWithoutUseEffect,
  },
  {
    name: "throttle with use effect",
    path: "/throttle-with-use-effect",
    component: ThrottleWithUseEffect,
  },
];

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
