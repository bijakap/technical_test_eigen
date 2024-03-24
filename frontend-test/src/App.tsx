import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { LayoutComp } from "./components/layout";
import { DetailPage } from "./pages/detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          <Route index element={<Home />} />
          <Route path="detail" element={<DetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
