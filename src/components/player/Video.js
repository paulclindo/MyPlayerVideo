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
    /* height: 100%; */
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

const Video = (props: Props) => {
  const videoRef = useRef(null);
  useEffect(() => {
    toggleplay();
  }, [props.pause]);

  const toggleplay = () => {
    const { pause } = props;
    if (!pause) {
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
    onLoadStart,
    onLoadedData,
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
        onLoadStart={onLoadStart}
        onLoadedData={onLoadedData}
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
