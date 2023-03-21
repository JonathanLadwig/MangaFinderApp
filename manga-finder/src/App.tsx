import { useMediaQuery } from "react-responsive";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import TabsBar from "./components/TabsBar";
import "./index.css";
import Browse from "./pages/Browse";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Manga from "./pages/Manga";
import Reader from "./pages/Reader";

export default function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div className="w-full">
      <NavBar />
      <div className="mt-12 lg:mt-16 mb-12 lg:mb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/browse/:query" element={<Browse />} />
          <Route path="/manga/:mangaid" element={<Manga />} />
          <Route path="/reader/:chapterid" element={<Reader />} />
          <Route path="*" element={<Error />} errorElement={<Error />} />
        </Routes>
      </div>
      {isTabletOrMobile ? <TabsBar /> : null}
    </div>
  );
}
