import React , { Component } from 'react';
import './Video.css';
import {faker} from '@faker-js/faker';

export default class Video extends Component {
  render() {
    
    const views = faker.datatype.number({min:250 , max:1000})
    const history = faker.datatype.number({min:1 , max:24})
  
    return (
      <div className='video' onClick={() => this.props.onSelectedVideo(this.props.object)}>
        <img className='video-cover' src={this.props.object.snippet.thumbnails.medium.url}  alt='this.props.snippet.title'/>

        <div className='details'>
          <h4 className='video-title'>{ this.props.object.snippet.title }</h4>
          <p className='channel-title'>{this.props.object.snippet.channelTitle}</p>

          <div className='views-history'>
            <p className='views'>{views}K views</p>
            <p className='history'>• {history} days ago</p>
          </div>
        </div>
      </div>
    );
  }
}
