import { Route, Routes } from "react-router-dom";
import Home from "./comp/areas/main/Home";

import AtmorOverview from "./comp/areas/atmor/AtmorOverview";
import Page1 from "./comp/areas/atmor/Page1";
import Page2 from "./comp/areas/atmor/Page2";

import './App.css';

export default function App() {
  return (
      <Routes>
          <Route index element={<Home />} />
          <Route path="/atmor/overview" element={<AtmorOverview />}/>
          <Route path="/atmor/page1" element={<Page1 />} />
          <Route path="/atmor/page2" element={<Page2 />} />
      </Routes>
  );
}
