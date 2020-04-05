import React, { useState, useRef, useEffect } from "react";
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

// class VideoPlayerContainer extends Component<Props> {
const VideoPlayerContainer = (props: Props) => {
  const video = useRef();
  const [pause, setPause] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [loading, setLoading] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    setPause(!props.autoplay);
    video.current = value;
  }, [props.autoplay]);
  // state = {
  //   pause: true,
  //   duration: 0,
  //   currentTime: 0,
  //   loading: false,
  //   muted: false
  // };

  // componentDidMount() {
  //   this.setState({
  //     pause: !this.props.autoplay
  //   });
  // }

  const togglePlay = () => {
    setPause(!pause);
  };

  const toggleMuted = () => {
    setMuted(!muted);
  };

  const handleLoadedMetada = (e) => {
    var video = e.target;
    console.log({ video });
    setDuration(video.duration);
  };

  const handleTimeUpdate = (e) => {
    console.log(video);
    // const video = e.target;
    setCurrentTime(video.currentTime);
    // this.setState({
    //   currentTime: this.video.currentTime,
    // });
  };

  const handleProgressChange = (e) => {
    video.currentTime = e.target.value;
    // video.currentTime =
    // console.log(this.video);
  };

  const handleSeeking = () => {
    setLoading(true);
    // this.setState({
    //   loading: true,
    // });
  };

  const handleSeeked = () => {
    setLoading(false);
  };

  const handleVolumeChange = (e) => {
    // console.log(e.target.value);
    // this.volume = e.target.value;
  };

  const handleVolumeMuted = (e) => {
    video.muted = e.target.value;
  };

  const handleFullScreenClick = () => {
    if (!document.webkitIsFullScreen) {
      video.webkitRequestFullScreen();
    } else {
      document.webkitExitFullscreen();
    }
  };

  const { title, autoplay, src } = props;
  // const { pause, duration, currentTime, loading, muted } = this.state;
  return (
    <VideoPlayerLayout setRef={videoRef}>
      <Title title={title} />

      <VideoPlayerControl>
        <PlayPause pause={pause} handleClick={togglePlay} />
        <Timer
          duration={formattedTime(duration)}
          currentTime={formattedTime(currentTime)}
        />
        <ProgressBar
          duration={duration}
          value={currentTime}
          handleProgressChange={handleProgressChange}
        />
        <Volume
          handleVolumeChange={handleVolumeChange}
          handleClick={toggleMuted}
        />
        <FullScreen handleFullScreenClick={handleFullScreenClick} />
      </VideoPlayerControl>
      <Spinner active={loading} />
      <Video
        pause={pause}
        muted={muted}
        autoplay={autoplay}
        handleLoadedMetada={handleLoadedMetada}
        handleTimeUpdate={handleTimeUpdate}
        handleSeeked={handleSeeked}
        handleSeeking={handleSeeking}
        src={src}
      />
    </VideoPlayerLayout>
  );
};

export default VideoPlayerContainer;
