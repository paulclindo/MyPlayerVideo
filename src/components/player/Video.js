import React, { Component, useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: inherit;
  height: 0;
  position: relative;
  padding-bottom: 52.25%;
  video {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

type Props = {|
  pause: boolean,
  handleLoadedMetada: any,
  handleTimeUpdate: any,
  handleSeeking: any,
  handleSeeked: any,
  autoplay: boolean,
  src: string,
  muted: boolean,
|};

// class Video extends Component<Props> {
const Video = (props: Props) => {
  const videoRef = useRef(null);
  useEffect(() => {
    toggleplay();
    console.log(props.pause);
  }, [props.pause]);

  // componentWillReceiveProps(nextProps) {
  //   const { pause } = this.props;
  //   if (nextProps.pause !== pause) {
  //     this.toggleplay();
  //   }
  // }

  // setRef = element => {
  //   this.video = element;
  // };

  const toggleplay = () => {
    const { pause } = props;
    if (pause) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const {
    handleLoadedMetada,
    handleTimeUpdate,
    handleSeeking,
    handleSeeked,
    autoplay,
    src,
    muted,
  } = props;

  return (
    <Wrapper>
      <video
        autoPlay={autoplay}
        src={src}
        ref={videoRef}
        onLoadedMetadata={handleLoadedMetada}
        onTimeUpdate={handleTimeUpdate}
        onSeeking={handleSeeking}
        onSeeked={handleSeeked}
        muted={muted}
      />
    </Wrapper>
  );
};
export default Video;
