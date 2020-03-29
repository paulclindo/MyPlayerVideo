import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  bottom: 10px;
  left: 10px;
  right: 10px;
  z-index: 2;
  border-radius: 20px;
  padding: 0 10px;
`;

type Props = {|
  children: React.Node,
|};
function VideoPlayerControls(props: Props) {
  const { children } = props;
  return <Wrapper className="VideoPlayerControls">{children}</Wrapper>;
}
export default VideoPlayerControls;
