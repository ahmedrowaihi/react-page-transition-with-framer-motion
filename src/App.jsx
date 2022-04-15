import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import AboutPage from "./routes/AboutPage";
import HomePage from "./routes/HomePage";
import Page404 from "./routes/Page404";

function App() {
  return (
    <main className="container">
      <Nav />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>
    </main>
  );
}

export default App;
