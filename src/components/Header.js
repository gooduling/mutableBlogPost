import React from 'react';
import styled from 'react-emotion';

export const Header = props => (
  <Wrapper>
    <span>Button</span>
    <span>Button</span>
    <span>Button</span>
  </Wrapper>
);

const Wrapper = styled('header')`
  height: 65px;
  min-height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 27px;
  position: fixed;
  width: 100%;
`;
