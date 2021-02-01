import React from "react";
import { Link, NavLink } from "~/components/base/link";
import styled from "styled-components";

function MainHeader() {
  return (
    <Styled.MainHeader>
      <NavLink path="/" label="홈" className="nav__link" />
      <NavLink path="/support/about" label="어바웃" className="nav__link" />
    </Styled.MainHeader>
  );
}

const Styled = {
  MainHeader: styled.header`
    background: #ececec;
    .nav__link {
      display: inline-block;
      padding: 10px;
      margin-right: 5px;

      &.active {
        color: red;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  `,
};

export default MainHeader;
