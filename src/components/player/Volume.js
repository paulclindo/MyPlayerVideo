import React from "react";
import styled from "styled-components";
import VolumeIcon from "../assets/VolumeIcon";
import { IoMdVolumeHigh } from "react-icons/io";
const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0 15px;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: 0;
  position: relative;

  .Volume-range {
    transform: rotate(-90deg);
    transform-origin: left bottom;
    position: absolute;
    bottom: 50px;
    left: 50px;
    height: 50px;
    display: none;
    background: rgba(0, 0, 0, 0.7);
    padding-right: 20px;
    border-radius: 0 20px 20px 0;
  }
  .Volume input {
    cursor: grab;
    background: gray;
    border: 1px solid gray;
  }

  &:hover .Volume-range {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
type Props = {|
  handleClick: Function,
  handleVolumeChange: Function
|};
function Volume(props: Props) {
  const { handleClick, handleVolumeChange } = props;
  return (
    <Button type="button" onClick={handleClick}>
      <IoMdVolumeHigh color="white" size={25} />
      <div className="Volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          onChange={handleVolumeChange}
        />
      </div>
    </Button>
  );
}

export default Volume;
