import { Route, Routes } from "react-router-dom";
import Home from "./comp/pages/Home";
import Page1 from "./comp/pages/Page1";
import Page2 from "./comp/pages/Page2";
import './App.css';

export default function App() {
  return (
      <Routes>
          <Route index element={<Home />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
      </Routes>
  );
}
