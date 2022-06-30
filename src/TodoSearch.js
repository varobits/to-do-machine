import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){

    const OnSearchValueChange= (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(
        <input 
            className="TodoSearch"
            placeholder="¡A por ello!" 
            value={searchValue}
            onChange={OnSearchValueChange}
        />
    );
}

export {TodoSearch};