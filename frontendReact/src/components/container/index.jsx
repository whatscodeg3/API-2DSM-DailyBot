import React from "react";

import { ContainerStyle } from "./styles"


function Container({ children, color }) {
  return (
    <>
      <ContainerStyle color={color}>
        {children}
      </ContainerStyle>
    </>

  )

}

export default Container;