import react from "react";
import './TodoSearch.css';

function TodoSearch(){

    const OnSearchValueChange= (event)=>{
        console.log(event.target.value);
    };

    return(
        <input 
            className="TodoSearch"
            placeholder="Cebolla" 
            onChange={OnSearchValueChange}
        />
    );
}
export {TodoSearch};