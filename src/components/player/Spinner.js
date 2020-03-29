import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 50px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: white;
    font-size: 20px;
  }
`;

type Props = {|
  +active: boolean,
|};

function Spinner(props: Props) {
  const { active } = props;
  if (!active) return null;

  return (
    <Wrapper>
      <span>Cargando..</span>
    </Wrapper>
  );
}

export default Spinner;
