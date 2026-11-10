import { Suspense } from "react";

import LoadingSpinner from "./components/loadingSpinner/index.jsx";

import "./App.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
const Layout = lazy(() => import("./layout/main/index.jsx"));
const NotFound = lazy(() => import("./pages/404/index.jsx"));
const Home = lazy(() => import("./pages/home/index.jsx"));
const About = lazy(() => import("./pages/about/index.jsx"));
const Groups = lazy(() => import("./pages/groups/index.jsx"));
const Events = lazy(() => import("./pages/events/index.jsx"));
const Orchestra = lazy(() => import("./pages/singlePages/orchestra/index.jsx"));
const Strings = lazy(() => import("./pages/singlePages/strings/index.jsx"));
const Flutes = lazy(() => import("./pages/singlePages/flutes/index.jsx"));
const Clarinets = lazy(() => import("./pages/singlePages/clarinet/index.jsx"));
const Saxophones = lazy(() => import("./pages/singlePages/saxophone/index.jsx"));
const Mosaic = lazy(() => import("./pages/singlePages/mosaic/index.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about-us"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/groups"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Groups />
            </Suspense>
          }
        />
        <Route
          path="/events"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Events />
            </Suspense>
          }
        />
        <Route
          path="/community-orchestra"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Orchestra />
            </Suspense>
          }
        />
        <Route
          path="/string-orchestra"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Strings />
            </Suspense>
          }
        />
        <Route
          path="/flute-choir"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Flutes />
            </Suspense>
          }
        />
        <Route
          path="/clarinet-choir"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Clarinets />
            </Suspense>
          }
        />
        <Route
          path="/saxophone-choir"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Saxophones />
            </Suspense>
          }
        />
        <Route
          path="/mosaic-sounds"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Mosaic />
            </Suspense>
          }
        /> 
      </Route>

      <Route
        path="*"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        }
      />
    </>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
