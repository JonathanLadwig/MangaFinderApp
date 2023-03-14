import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Browse from "./pages/Browse";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Manga from "./pages/Manga";
import Reader from "./pages/Reader";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/browse:query" element={<Browse />} />
        <Route path="/library" element={<Library />} />
        <Route path="/manga/:mangaid" element={<Manga />} />
        <Route path="/reader/:chapterid" element={<Reader />} />
        <Route path="*" element={<Error />} errorElement={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
