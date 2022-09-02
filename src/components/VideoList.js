import React , { Component } from 'react';
import Video from './Video';
import './VideoList.css';

export default class VideoList extends Component {
  render() {
    return (
      <div className='video-list'>
        {
            this.props.data.map((object)=>{
                return(
                    <Video onSelectedVideo={this.props.onSelectedVideo} object={object} />
                );
            })
        }
      </div>
    );
  }
}