import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/home/Home"));
const Toys = lazy(() => import("./pages/toys/Toys"));
const Tree = lazy(() => import("./pages/tree/Tree"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/toys"
          element={
            <Suspense>
              <Toys />
            </Suspense>
          }
        />
        <Route
          path="/tree"
          element={
            <Suspense>
              <Tree />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
