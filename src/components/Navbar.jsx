import styled from "styled-components";

export const Navbar = () => {
  return (
    <Container>
      <Heading>The Online Guitar Session</Heading>
      <Menu>
        <SubMenu>Home</SubMenu>
        <SubMenu>About</SubMenu>
        <SubMenu>Services</SubMenu>
        <SubMenu>Contact</SubMenu>
        <MenuButton>Get Started</MenuButton>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: #37517e;
  color: #f9f9f9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

const Heading = styled.h2`
  font-family: Jost, sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.5rem;
`;

const Menu = styled.div``;

const SubMenu = styled.a`
  text-decoration: none;
  font-family: OpenSans, sans-serif;
  font-weight: 500;
  font-size: 1rem;
  margin: 0px 10px;
  line-height: 23px;

  &:hover {
    color: #47b2e4;
    transition: 0.3s;
  }
`;

const MenuButton = styled.a`
  text-decoration: none;
  font-family: OpenSans, sans-serif;
  font-weight: 600;
  font-size: 14px;
  margin: 0px 10px;
  line-height: 21px;
  border: 2px solid #47b2e4;
  padding: 6px 25px 7px;
  border-radius: 25px;
  transition: 0.3s;

  &:hover {
    background-color: #31a9e1;
  }
`;
