import React, { Component } from "react";
import VideoPlayerLayout from "../components/player/VideoPlayerLayout";
import Video from "../components/player/Video";
import Title from "../components/player/Title";
import PlayPause from "../components/player/PlayPause";
import Timer from "../components/player/Timer";
import VideoPlayerControl from "../components/player/VideoPlayerControl";
import ProgressBar from "../components/player/ProgressBar";
import Spinner from "../components/player/Spinner";
import Volume from "../components/player/Volume";
import FullScreen from "../components/player/FullScreen";
import formattedTime from "../utilities/formattedTime";

type Props = {|
  title: string,
  autoplay: boolean,
  src: string,
|};

class VideoPlayerContainer extends Component<Props> {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    muted: false,
    lastVolume: 1,
    VolumeLevel: 1,
    fullscreen: false,
  };

  componentDidMount() {
    this.setState({
      pause: !this.props.autoplay,
    });
  }

  togglePlay = () => {
    this.setState({
      pause: !this.state.pause,
    });
  };

  toggleMuted = () => {
    console.log(this.video.volume, "volumen");
    this.setState({
      muted: !this.state.muted,
      lastVolume: this.video.volume,
    });
    this.video.volume = this.state.muted ? this.state.lastVolume : 0;
    this.setState({
      VolumeLevel: this.video.volume,
    });
  };

  handleLoadedMetada = (e) => {
    this.video = e.target;
    this.setState({
      duration: this.video.duration,
      loading: false,
    });
  };

  handleTimeUpdate = () => {
    this.setState({
      currentTime: this.video.currentTime,
    });
  };

  handleProgressChange = (e) => {
    this.video.currentTime = e.target.value;
    console.log(this.video);
  };

  handleSeeking = () => {
    this.setState({
      loading: true,
    });
  };
  onLoadStart = () => {
    this.setState({
      loading: true,
    });
  };
  onLoadedData = () => {
    this.setState({
      loading: false,
    });
  };

  handleSeeked = () => {
    this.setState({
      loading: false,
    });
  };

  handleVolumeChange = (e) => {
    console.log(e.target.value);
    this.volume = e.target.value;
  };

  handleVolumeMuted = (e) => {
    this.video.muted = e.target.value;
  };

  handleFullScreenClick = () => {
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullScreen();
      this.setState({ fullscreen: true });
    } else {
      document.webkitExitFullscreen();
      this.setState({ fullscreen: false });
    }
  };

  setRef = (element) => {
    this.player = element;
  };

  render() {
    const { title, autoplay, src } = this.props;
    const { pause, duration, currentTime, loading, muted } = this.state;
    return (
      <VideoPlayerLayout setRef={this.setRef}>
        <Title title={title} />

        <VideoPlayerControl>
          <PlayPause pause={pause} handleClick={this.togglePlay} />
          <Timer
            duration={formattedTime(duration)}
            currentTime={formattedTime(currentTime)}
          />
          <ProgressBar
            duration={duration}
            value={currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            muted={muted}
            handleVolumeChange={this.handleVolumeChange}
            handleClick={this.toggleMuted}
            volumeLevel={this.state.VolumeLevel}
          />
          <FullScreen
            fullscreen={this.state.fullscreen}
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </VideoPlayerControl>
        <Spinner active={loading} />
        <Video
          pause={pause}
          muted={muted}
          autoplay={autoplay}
          onLoadStart={this.onLoadStart}
          onLoadedData={this.onLoadedData}
          handleLoadedMetada={this.handleLoadedMetada}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeked={this.handleSeeked}
          handleSeeking={this.handleSeeking}
          src={src}
        />
      </VideoPlayerLayout>
    );
  }
}

export default VideoPlayerContainer;
