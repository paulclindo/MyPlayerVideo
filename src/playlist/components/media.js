import React, { Component } from 'react'
import './media.scss'
class Media extends Component{
  
    state = {
      author: 'Payl',
      title: 'Trying React'
    }

  handleClick = e => {
    // console.log(this.props.title)
    this.setState ({
      author: 'Brayan',
      title: 'Hola react'
    })
  }
  render(){
    // const styles = {
    //   container: {
    //     color: '#44546b',
    //     cursor: 'pointer',
    //     border: '2px black solid',

    //   }
    // }


    return(
      <div className="Media" onClick={this.handleClick} >
        <div className="Media-cover">
          <img 
            className="Media-image"
            src={this.props.image} 
            alt=""
            width={260}
            height={160}/>
            <h3 className="Media-title">{this.state.title}</h3>
            <p className="Media-author">{this.state.author}</p>
        </div>
      </div>
    )
  }
}

export default Media