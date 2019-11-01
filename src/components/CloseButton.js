import React from "react";
import styled from "styled-components";
import { closeWindow } from "../api/windows";

const ButtonStyled = styled.button``;

export function CloseButton() {
  return <ButtonStyled onClick={closeWindow}>X</ButtonStyled>;
}
