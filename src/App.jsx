import "./App.css";

import { Route } from "react-router-dom";

import Cryptocurrencies from "./components/Cryptocurrencies.jsx";
import Cryptodetails from "./components/Cryptodetails.jsx";
import Homepage from "./components/Homepage.jsx";
import News from "./components/News.jsx";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Homepage />} />
        <Route path="news" element={<News />} />
        <Route path="crypto-currencies" element={<Cryptocurrencies />} />
        <Route path="crypto-details/:coinId" element={<Cryptodetails />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
