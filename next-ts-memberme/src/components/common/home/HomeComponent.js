import React from "react";
import styled from "styled-components";

const HomeComponent = (props) => {
  const { search } = props;
  return <Styled.HomeComponent>Home</Styled.HomeComponent>;
};
const Styled = {
  HomeComponent: styled.div`
    font-weight: bold;
    background: orange;
  `,
};
export default HomeComponent;
