import React from 'react'
import './video-player-control.css'

function VideoPlayerControls(props){
  return(
    <div className="VideoPlayerControls">
      {props.children}
    </div>
  )
}
export default VideoPlayerControls