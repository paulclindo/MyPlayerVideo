/* eslint-disable */
import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: inherit;
  video {
    width: inherit;
    vertical-align: middle;
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

class Video extends Component<Props> {
  componentWillReceiveProps(nextProps) {
    const { pause } = this.props;
    if (nextProps.pause !== pause) {
      this.toggleplay();
    }
  }

  setRef = element => {
    this.video = element;
  };

  toggleplay() {
    const { pause } = this.props;
    if (pause) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  render() {
    const {
      handleLoadedMetada,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked,
      autoplay,
      src,
      muted,
    } = this.props;
    return (
      <Wrapper className="Video">
        <video
          autoPlay={autoplay}
          src={src}
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetada}
          onTimeUpdate={handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
          muted={muted}
        />
      </Wrapper>
    );
  }
}
export default Video;
