import React from "react";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin: auto;
  text-align: center;
  text-transform: uppercase;
  padding-top: 15%;
  /* background: #ef3735; */
  color: #ef3735;

  img {
    width: 400px;
  }
  pre {
    color: #e5e5e5;
  }
`;
const ErrorFallback = ({ error }) => {
  return (
    <ErrorWrapper>
      <img
        src="https://www.pngkit.com/png/full/212-2123485_material-design-error-page.png"
        alt=""
      />
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </ErrorWrapper>
  );
};

export default ErrorFallback;
