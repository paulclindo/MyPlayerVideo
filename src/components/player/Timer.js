import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 14px;
  color: white;
  padding: 0 10px 0 0;
  display: flex;
  align-items: center;
  p {
    margin: 0;
  }
`;
type Props = {|
  currentTime: number,
  duration: number,
|};
const Timer = (props: Props) => {
  const { currentTime, duration } = props;
  console.log(currentTime);
  return (
    <Wrapper>
      <p>
        <span>
          {currentTime} / {duration}
        </span>
      </p>
    </Wrapper>
  );
};

export default Timer;
