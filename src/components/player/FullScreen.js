import React from "react";
import styled from "styled-components";
import FullScreenIcon from "../assets/FullScreenIcon";
import { IoIosExpand, IoIosContract } from "react-icons/io";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 0 10px;
  cursor: pointer;
`;

type Props = {|
  handleFullScreenClick: Function,
|};

const FullScreen = (props: Props) => {
  const { fullscreen, handleFullScreenClick } = props;
  return (
    <Wrapper
      className="FullScreen"
      role="button"
      tabIndex="0"
      onClick={handleFullScreenClick}
      onKeyDown={handleFullScreenClick}
    >
      {fullscreen ? (
        <IoIosContract size={25} color="white" />
      ) : (
        <IoIosExpand size={25} color="white" />
      )}
    </Wrapper>
  );
};

export default FullScreen;
