import React, { Component } from 'react';

const SearchBox = ({searchChange}) => {
// const {searchChange} = this.props;    
    return ( 
        <div className='pas2'>
        <input 
        type='search' 
        placeholder='Search robots' 
        className='pas3 ba b--green bg-lightest-blue'
        onChange={searchChange}
        />  
        </div>
     );
}
 
export default SearchBox;