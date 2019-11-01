import React from "react";
import styled from "styled-components";
import CloseButton from "./buttons/CloseButton";
import { dragMoveWindow } from "../api/windows";

const HeaderStyled = styled.header`
  height: 30px;
  background: #222;
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <HeaderStyled onMouseDown={dragMoveWindow}>
      WarApp
      <CloseButton />
    </HeaderStyled>
  );
}
