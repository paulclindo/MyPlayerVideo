import React, { Component } from "react";
import VideoPlayerLayout from "../components/video-player-layout";
import Video from "../components/video";
import Title from "../components/title";
import PlayPause from "../components/play-pause";
import Timer from "../components/timer";
import Controls from "../components/video-player-control";
import formattedTime from "../../utilities/formattedTime";
import ProgressBar from "../components/progress-bar";
import Spinner from "../components/spinner";
import Volume from "../components/volume";
import FullScreen from "../components/full-screen";

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    muted: 0
  };
  togglePlay = e => {
    this.setState({
      pause: !this.state.pause
    });
  };
  toggleMuted = e => {
    this.setState({
      muted: !this.state.muted
    });
  };

  componentDidMount() {
    this.setState({
      pause: !this.props.autoplay
    });
  }

  handleLoadedMetada = e => {
    this.video = e.target;
    this.setState({
      duration: this.video.duration
    });
  };
  handleTimeUpdate = e => {
    this.setState({
      currentTime: this.video.currentTime
    });
  };

  handleProgressChange = e => {
    this.video.currentTime = event.target.value;
  };

  handleSeeking = e => {
    this.setState({
      loading: true
    });
  };

  handleSeeked = e => {
    this.setState({
      loading: false
    });
  };
  handleVolumeChange = e => {
    this.video.volume = e.target.value;
  };
  handleVolumeMuted = e => {
    this.video.muted = e.target.value;
  };
  handleFullScreenClick = e => {
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullScreen();
    } else {
      document.webkitExitFullscreen();
    }
  };

  setRef = element => {
    this.player = element;
  };
  render() {
    return (
      <VideoPlayerLayout setRef={this.setRef}>
        <Title title={this.props.title} />

        <Controls>
          <PlayPause pause={this.state.pause} handleClick={this.togglePlay} />
          <Timer
            duration={formattedTime(this.state.duration)}
            currentTime={formattedTime(this.state.currentTime)}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleClick={this.toggleMuted}
          />
          <FullScreen handleFullScreenClick={this.handleFullScreenClick} />
        </Controls>
        <Spinner active={this.state.loading} />
        <Video
          pause={this.state.pause}
          muted={this.state.muted}
          autoplay={this.props.autoplay}
          handleLoadedMetada={this.handleLoadedMetada}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeked={this.handleSeeked}
          handleSeeking={this.handleSeeking}
          src={this.props.src}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayer;
