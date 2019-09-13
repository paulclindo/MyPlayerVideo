import React, { Component } from 'react'
import './video.css'

class Video extends Component {
  toggleplay(){
    if(this.props.pause){
      this.video.play()
    } else {
      this.video.pause()
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.pause !== this.props.pause) {
      this.toggleplay()
    }
  }
  
  setRef= element => {
    this.video = element 
  }
  
  render() {
    const {
      handleLoadedMetada,
      handleTimeUpdate,
      handleSeeking,
      handleSeeked
    } = this.props
    return (
      <div className="Video">
        <video
          autoPlay = {this.props.autoplay}
          src={this.props.src}
          ref={this.setRef}
          onLoadedMetadata = {handleLoadedMetada}
          onTimeUpdate = {handleTimeUpdate}
          onSeeking={handleSeeking}
          onSeeked={handleSeeked}
          muted = { this.props.muted}
        />
      </div>
    )
  }
}
export default Video
