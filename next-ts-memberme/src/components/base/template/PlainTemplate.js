import React from "react";
import styled from "styled-components";

const PlainTemplate = (props) => {
  const { header: Header, main: Main } = props;
  return (
    <Styled.PlainTemplate>
      <header className="PlainTemplate__header">{Header}</header>
      <main className="PlainTemplate__main">{Main || props.children}</main>
    </Styled.PlainTemplate>
  );
};

const Styled = {
  PlainTemplate: styled.div`
    .PlainTemplate__header {
      /* width: 260px; */
    }
    .PlainTemplate__main {
      /* width: (100% - 260px);
      padding-left: 260px;
      margin-left: 1%; */
    }
  `,
};

export default PlainTemplate;
