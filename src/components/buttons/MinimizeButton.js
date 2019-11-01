import React from "react";
import { closeWindow } from "../api/windows";
import WindowButton from "./WindowButton";

export default function MinimizeButton() {
  return <WindowButton onClick={closeWindow}>_</WindowButton>;
}
