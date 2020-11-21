import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  height: 50vh;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 1.5fr 1.2fr 0.8fr;
  grid-template-areas: 
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content1 content2 content3"
    "sidebar footer footer footer";
  grid-gap: 0.2rem;
`;

const StyledNav = styled.nav`
  background: #a7ffeb;
  grid-area: nav;
`;

const StyledMain = styled.main`
  background: #84ffff;
  grid-area: main;
`;

const StyledSB = styled.div`
  background: #18ffff;
  grid-area: sidebar;
`;

const StyledDiv = styled.div`
  background: #6fffd2;
`;

const StyledFooter = styled.footer`
  background: #18ffff;
  grid-area: footer;
`;

const CSSGridDemo = () => {
  return (
    <StyledContainer className={"container"}>
      <StyledNav>NavBar</StyledNav>
      <StyledMain>Main</StyledMain>
      <StyledSB id="sidebar">Sidebar</StyledSB>
      <StyledDiv id="content1" style={{ gridArea: "content1" }}>Content1</StyledDiv>
      <StyledDiv id="content2" style={{ gridArea: "content2" }}>Content2</StyledDiv>
      <StyledDiv id="content3" style={{ gridArea: "content3" }}>Content3</StyledDiv>
      <StyledFooter>Footer</StyledFooter>
    </StyledContainer>
  );
};

export default CSSGridDemo;
