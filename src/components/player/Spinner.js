import React from "react";
import styled from "styled-components";
import Loader from "../Loader";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
`;

type Props = {|
  +active: boolean,
|};

function Spinner(props: Props) {
  const { active } = props;
  if (!active) return null;
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
}

export default Spinner;
