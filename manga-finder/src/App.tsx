import { useMediaQuery } from "react-responsive";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import TabsBar from "./components/TabsBar";
import "./index.css";
import Browse from "./pages/Browse";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Manga from "./pages/Manga";
import Reader from "./pages/Reader";

export default function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div className="w-full">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/browse/:query" element={<Browse />} />
        <Route path="/library" element={<Library />} />
        <Route path="/manga/:mangaid" element={<Manga />} />
        <Route path="/reader/:chapterid" element={<Reader />} />
        <Route path="*" element={<Error />} errorElement={<Error />} />
      </Routes>
      {isTabletOrMobile ? <TabsBar /> : null}
    </div>
  );
}
//Store
//Use browser router in main.tsx
//Failsafe if data doesn't load (404 for manga)
