import React from "react";
import GlobalStyle from "../components/GlobalStyle";
import Header from "../components/Header";
import { addLolEventListener } from "../api/games";

export default function Overlay() {
  const [gold, setGold] = React.useState(0);

  React.useEffect(() => {
    addLolEventListener({ setGold });
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <h1>Overlay!!</h1>
      <p>{gold}</p>
    </>
  );
}
