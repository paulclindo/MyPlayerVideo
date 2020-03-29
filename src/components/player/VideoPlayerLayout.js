import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  background: black;
`;

type Props = {|
  children: React.Node,
  setRef: any,
|};
const VideoPlayerLayout = (props: Props) => {
  const { children, setRef } = props;
  return <Wrapper ref={setRef}>{children}</Wrapper>;
};

export default VideoPlayerLayout;
