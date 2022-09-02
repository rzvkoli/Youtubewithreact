import React , { Component } from 'react';
import './ShowVideo.css';

export default class ShowVideo extends Component {
  render() {
    if(!this.props.object)
    {
      return (<div></div>)
    }
    
    const videoSrc = `https://www.youtube.com/embed/ ${this.props.object.id.videoId}`

    return (
      <div className='show-video'>
        <div className='showman'>
            <iframe className='selected-video' src={videoSrc} title='this.props.object.snippet.title'/>
        </div>
        <div className='footer-show-video'>
        <h3 className='title'>{this.props.object.snippet.title}</h3>
        <br />
        <div className='description-btn-more'>
          <p className='description'>{this.props.object.snippet.description}</p>
        </div>
        <p className='publish-time'>{this.props.object.snippet.publishTime}</p>
        </div>
      </div>
    );
  }
}
