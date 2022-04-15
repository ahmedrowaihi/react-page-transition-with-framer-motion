import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import AboutPage from "./routes/AboutPage";
import HomePage from "./routes/HomePage";
import Page404 from "./routes/Page404";

function App() {
  const location = useLocation();
  return (
    <main className="container">
      <Nav />
      <main className="container">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </AnimatePresence>
      </main>
    </main>
  );
}

export default App;
