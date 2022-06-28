import react from "react";
import './CreateTodoButton.css';

function CreateTodoButtom(props){

    const OnClickButton= (msg)=> {
        alert(msg);
    }

    return(
        <button
            className="CreateTodoButton"
            onClick={()=>{OnClickButton("aqui msg")}}
        >
            +
        </button>
    );
}

export { CreateTodoButtom};