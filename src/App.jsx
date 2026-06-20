import RoutesPage from "./route";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<RoutesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
