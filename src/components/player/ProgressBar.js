import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  input {
    width: 100%;
  }

  input[type='range'] {
    -webkit-appearance: none !important;
    background: gray;
    height: 7px;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    background: white;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
  input[type='range']::-webkit-slider-thumb:hover {
    -webkit-appearance: none !important;
    transform: scale(1.2);import default from '../../player/components/progress-bar';

  }
`;

type Props = {|
  duration: number,
  value: any,
  handleProgressChange: Function,
|};
const ProgressBar = (props: Props) => {
  const { duration, value, handleProgressChange } = props;
  return (
    <Wrapper>
      <input
        type="range"
        min={0}
        max={duration}
        value={value}
        onChange={handleProgressChange}
      />
    </Wrapper>
  );
};

export default ProgressBar;
