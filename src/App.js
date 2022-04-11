import Header from "./components/header/Header";
import Path from "./local-path";
import Home from "./components/home/Home";
import AboutUs from "./components/about-us/AboutUs";
import ContactUs from "./components/contact-us/ContactUs";

import { Route, Routes } from "react-router-dom";
import { map } from "lodash";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllBreeds, fetchDogByBreed } from "./store/slice/dogs";

const routes = [
  { path: Path.Home, name: "Home", component: Home },
  { path: Path.About, name: "About", component: AboutUs },
  { path: Path.ContactUs, name: "Contact Us", component: ContactUs },
];

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBreeds()).then(() => dispatch(fetchDogByBreed()));
  }, [dispatch]);

  return (
    <div className="App">
      <Header routes={routes} />
      <Routes>
        {map(routes, (route) => (
          <Route
            key={route.name}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
