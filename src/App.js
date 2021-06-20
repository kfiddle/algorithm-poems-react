import { Fragment, useState, useEffect } from "react";

import Header from "./components/header/Header";
import PennyFarthing from "./components/pennyFarthing/PennyFarthing";
import SideBar from "./components/sideBar/SideBar";

import "./App.css";

const menuList = ["About Me", "Current Projects", "Contact Me"];

function App() {
  const [bikeRiding, setBikeRiding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBikeRiding(false);
    }, 24000);
  });

  const choiceHandler = (choice) => {
    console.log(choice);
  };

  return (
    <Fragment>
      <Header />
      <SideBar menuList={menuList} choice={choiceHandler} />

      {bikeRiding && <PennyFarthing />}
    </Fragment>
  );
}

export default App;
