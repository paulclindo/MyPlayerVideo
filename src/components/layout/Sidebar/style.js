import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 320px;
  background: ${props => props.theme.colors.red};
  position: fixed;
  text-align: center;
  height: 100%;
`;
export const HeaderLogo = styled.div`
  svg {
    /* margin-right: 40px; */
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  margin-top: 2rem;
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  letter-spacing: 2.5px;
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  margin-left: 2rem;
  padding: 0;
  svg {
    margin-right: 1rem;
  }
  li {
    text-align: left;
    list-style: none;
    padding: 1rem 1.5rem;
  }
  li a {
    position: relative;
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
  }
  li a:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0%;
    height: 5px;
    transition: all 1s;
    background-color: ${props => props.theme.colors.primary};
  }
  li a:hover:after {
    width: 100%;
  }
  li a:hover {
    color: ${props => props.theme.colors.primary};
  }
`;
