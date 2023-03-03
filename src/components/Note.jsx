import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){
    function notedelete(){
        props.ondelete(props.id)
    }
    return(
        <div className="note">
        <h1>{props.title}</h1>
        <h1>{props.content}</h1>
        <p>{props.key}</p>
        <button onClick={notedelete}><DeleteIcon/></button>
        </div>
    )
}

export default Note;
