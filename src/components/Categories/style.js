import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  margin-left: ${props => (props.collapse ? "80px" : "320px")};
  overflow: hidden;
  padding: 2rem;
  background: var(--white-color);
  transition: all ease-in 0.3s;
  animation: opacity 1s forwards ease;
  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
