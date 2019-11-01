import React from "react";
import GlobalStyle from "../components/GlobalStyle";
import Header from "../components/Header";
import { toggleOverlayWindow } from "../api/windows";
import { registerHotKey } from "../api/settings";

export default function Desktop() {
  React.useEffect(() => {
    console.log("register");
    registerHotKey(() => {
      console.log("toggle");
      toggleOverlayWindow();
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <h1>Overwolf</h1>
    </>
  );
}
