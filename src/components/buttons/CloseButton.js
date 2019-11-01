import React from "react";
import { closeWindow } from "../../api/windows";
import WindowButton from "./WindowButton";

export default function CloseButton() {
  return <WindowButton onClick={closeWindow}>X</WindowButton>;
}
