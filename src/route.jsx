import DebounceWithUseEffect from "./debounce";
import DebounceWithoutUseEffect from "./debounce/debounceWithoutUseEffect";
import { Routes, Route, Link } from "react-router-dom";
import ThrottleWithUseEffect from "./throttle/index";
import FormWithState from "./form/index";
import TicTacToe from "./tictactoe/Index";
import GridLight from "./gridlight/Index";
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
  {
    name: "form with state",
    path: "/form-with-state",
    component: FormWithState,
  },
  {
    name: "tic tac toe",
    path: "/tic-tac-toe",
    component: TicTacToe,
  },
  {
    name: "grid light",
    path: "/grid-lighte",
    component: GridLight,
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
