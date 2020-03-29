import React from 'react';
import styled from 'styled-components';
import FullScreenIcon from '../assets/FullScreenIcon';

const Wrapper = styled.div`
  /*border: 1px solid red;*/
  align-items: center;
  display: flex;
  padding: 0 10px;
  cursor: pointer;
`;

type Props = {|
  handleFullScreenClick: Function,
|};

const FullScreen = (props: Props) => {
  const { handleFullScreenClick } = props;
  return (
    <Wrapper
      className="FullScreen"
      role="button"
      tabIndex="0"
      onClick={handleFullScreenClick}
      onKeyDown={handleFullScreenClick}
    >
      <FullScreenIcon size={25} color="white" />
    </Wrapper>
  );
};

export default FullScreen;
