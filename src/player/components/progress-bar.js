import React from 'react'
import './progress-bar.css'

export default (props) => {
  return (
    <div className="ProgressBar">
      <input 
        type="range"
        min = {0}
        max = {props.duration}
        value={props.value}
        onChange={props.handleProgressChange}
      />
    </div>
  )
}
