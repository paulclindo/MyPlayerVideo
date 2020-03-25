import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 320px;
  background: var(--ligthterbrown-color);
  position: fixed;
  text-align: center;
  height: 100%;
  .logo {
    margin-top: 2rem;
    color: var(--accent-color);
    font-weight: 500;
    letter-spacing: 2.5px;
  }
  .nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    margin-left: 2rem;
    padding: 0;
  }

  .nav li {
    text-align: left;
    list-style: none;
    padding: 1rem 1.5rem;
  }
  .nav li a {
    position: relative;
    text-decoration: none;
    color: var(--dark-color);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.8rem;
  }
  .nav li a:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0%;
    height: 5px;
    transition: all 1s;
    background-color: var(--primary-color);
  }
  .nav li a:hover:after {
    width: 100%;
  }
  .nav li a:hover {
    color: var(--primary-color);
  }
`;
