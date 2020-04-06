import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  bottom: -30px;
  left: 0;
  right: 0;
  z-index: 2;
  /* border-radius: 20px; */
  padding: 0 1rem;
`;

type Props = {|
  children: React.Node,
|};
function VideoPlayerControls(props: Props) {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
}
export default VideoPlayerControls;
