import styled from "styled-components";
import React from "react";
import PlayIcon from "../assets/PlayIcon";
import PauseIcon from "../assets/PauseIcon";
import { IoIosPlay, IoIosPause } from "react-icons/io";

const Wrapper = styled.div`
  width: 50px;
  height: 50px;

  button {
    height: inherit;
    border: none;
    background: transparent;
    outline: 0;
    sd: inherit;
    box-sizing: none;
    font-size: 30px;
    cursor: pointer;
    padding: 0;
  }
`;

type Props = {|
  +pause: boolean,
  handleClick: Function
|};

const PlayPause = (props: Props) => {
  const { pause, handleClick } = props;
  return (
    <Wrapper>
      {pause ? (
        <button type="button" onClick={handleClick}>
          <IoIosPlay size={25} color="white" />
        </button>
      ) : (
        <button type="button" onClick={handleClick}>
          <IoIosPause size={25} color="white" />
        </button>
      )}
    </Wrapper>
  );
};

export default PlayPause;
