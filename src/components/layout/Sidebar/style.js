import styled from "styled-components";

export const SidebarWrapper = styled.div`
  background: ${props => props.theme.colors.primary};
  position: fixed;
  text-align: center;
  height: 100%;
  min-width: ${props => (props.collapsed ? "auto" : "320px")};
  transition: min-width 10s;
  animation: ${props =>
    props.collapsed ? "transformY forwards ease 1s " : "unset"};
  @keyframes transformY {
    0% {
      transform: translateX(20px);
    }
    25% {
      transform: translateX(15px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(10px);
    }
    100%{
            transform: translateX(0);

    }
  }
  }
`;

export const HeaderLogo = styled.div`
  p {
    display: ${props => (props.collapsed ? "none" : "block")};
  }
  svg {
    cursor: pointer;
    margin: ${props => (props.collapsed ? "auto" : "unset")};
    margin-right: ${props => (props.collapsed ? "auto" : "40px")};
    transition: 0.7s all;
    &:hover {
      transform: rotate(90deg);
    }
  }
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: ${props => (props.collapsed ? "center" : "flex-start")};
  padding: ${props => (props.collapsed ? 0 : "0 1rem")};
  height: 60px;
  align-items: center;
  /* padding: 0 1rem; */
  margin-top: 2rem;
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  letter-spacing: 2.5px;
  font-family: ${props => props.theme.fonts[1]};
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  margin-left: ${props => (props.collapsed ? 0 : "2rem")};
  /* margin: ${props => props.collapsed && "auto"}; */
  padding: 0;
  svg {
    margin-right: ${props => (props.collapsed ? 0 : "1rem")};
  }
  li {
    text-align: left;
    list-style: none;
    padding: 1rem 1.5rem;
  }
`;

export const Link = styled.a`
  position: relative;
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  svg {
    margin-right: ${props => (props.collapsed ? "0" : "1rem")};
  }
  span {
    display: ${props => (props.collapsed ? "none" : "block")};
  }
  &:hover {
    color: ${props => props.theme.colors.white};
  }
  &:hover:after {
    width: 70%;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0%;
    height: 5px;
    transition: all 1s;
    background-color: ${props => props.theme.colors.white};
  }
`;
