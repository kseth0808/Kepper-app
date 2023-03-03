import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import {Fab, Zoom,} from "@mui/material";

function Create(props){
  const[isExpande, setExpande] = useState(false)
  const[note, setnote]= useState({
    title: "",
    Content: ""
  })
function handleOnChnage(event){
   const {name,value} = event.target;
   setnote(prevnote=>{
    return{
      ...prevnote,
      [name]:value
    }
   })
}
function submit(event){   
  props.onadd(note)
  setnote({
    title:"",
    Content:""
  })
  event.preventDefault();
}

function expand(){
  setExpande(true)
}
    return(
        <div>
        <form className="create-note">
        {isExpande ? <input name="title" onChange={handleOnChnage} placeholder="Title" value={note.title}/> :null}
        <textarea onClick={expand} name="Content" onChange={handleOnChnage} placeholder="Take a note..." value={note.Content} rows={setExpande ? 3: 1} />
        
        <Zoom in={isExpande}>
        <Fab onClick={submit}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
    )
}

export default Create;