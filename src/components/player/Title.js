import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px 20px;
  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: normal;
  }
`;
type Props = {|
  +title: string,
|};

const Title = (props: Props) => {
  const { title } = props;
  return (
    <Wrapper>
      <h2>{title}</h2>
    </Wrapper>
  );
};

export default Title;
