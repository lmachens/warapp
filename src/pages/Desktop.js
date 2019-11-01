import React from "react";
import GlobalStyle from "../components/GlobalStyle";
import Header from "../components/Header";
import { toggleOverlayWindow } from "../api/windows";
import { registerHotKey } from "../api/settings";
import { addLolEventListener } from "../api/games";

export default function Desktop() {
  const [gold, setGold] = React.useState(0);

  React.useEffect(() => {
    console.log("register");
    registerHotKey(() => {
      console.log("toggle");
      toggleOverlayWindow();
    });

    addLolEventListener({ setGold });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <h1>Overwolf</h1>
      <p>{gold}</p>
    </>
  );
}
