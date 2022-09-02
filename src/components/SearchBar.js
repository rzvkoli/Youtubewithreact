import React , { Component } from 'react';
import './SearchBar.css';
import { BsSearch } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";


export default class SearchBar extends Component {

    state = { inputValue:'' }

    onInputChange = e =>{
        this.setState({inputValue:e.target.value});
    }

    onInputSubmit = e => {
        e.preventDefault();
        this.props.onInputValueSubmit(this.state.inputValue)
    }  

  render() {
    return (
    <header className='header'>
        <div className='logo'>
            <IoLogoYoutube className='logo-youtube' size={35}/>
            <p className='logo-name'>YouTube</p>
        </div>
        <form className='search-bar' onSubmit={this.onInputSubmit}>
            <input
            type='text'
            className='field'
            placeholder='Search'
            value={this.state.inputValue}
            onChange={this.onInputChange}
            />
            <button className='btn-search' onClick={this.onInputSubmit}>
                <BsSearch className='search-icon'/>
            </button>
        </form>
    </header>
    );
  }
}
