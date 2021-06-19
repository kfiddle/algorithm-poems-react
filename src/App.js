import { Fragment, useState, useEffect } from "react";

import Header from "./components/header/Header";
import PennyFarthing from "./components/pennyFarthing/PennyFarthing";

import "./App.css";

function App() {
  const [bikeRiding, setBikeRiding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBikeRiding(false);
    }, 24000);
  });

  return (
    <Fragment>
      <Header />
      {bikeRiding && <PennyFarthing />}
    </Fragment>
  );
}

export default App;
