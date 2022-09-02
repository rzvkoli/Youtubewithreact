import React , { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import ShowVideo from './ShowVideo';
import APIGoogle from './api/APIGoogle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './YouTube.css';

export default class VideoSearch extends Component {

    constructor(props){
        super(props)
        this.onInputValueSubmit()
    }

    state = { videos:[] , selectedVideo:null }

    onInputValueSubmit = async inputValue => {

        const response = await APIGoogle.get('/search',
        {
            params : {
                q: inputValue
            }
        });

        this.setState({
            videos:response.data.items ,
            selectedVideo:response.data.items[0] 
        });
    }

    onSelectedVideo = object =>{
        this.setState({ selectedVideo:object })
    }

  render() {
    return (
    <div className='youtube'>
        <SearchBar onInputValueSubmit={this.onInputValueSubmit}/>
        <div className='principal'>
            <ShowVideo object={this.state.selectedVideo} />
            <VideoList onSelectedVideo={this.onSelectedVideo} data={this.state.videos} />
        </div>
    </div>
    );
  }
}

