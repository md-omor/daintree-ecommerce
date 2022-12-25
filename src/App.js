import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/Details";
import HomePage from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
