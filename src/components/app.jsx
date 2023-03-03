import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Create from "./Create";

function App(){
    const[notes, setnotes] = useState([]);
    function addNote(newNote){
    setnotes(previtems=>{
      return [...previtems, newNote];
    })
    }
    
    function ondelete(id){
      setnotes(prevnotes =>{
        return prevnotes.filter((noteitems, index)=>{
          return index !== id;
        })
      })
    
    }

    return (
    <><Header/>
    <Create onadd={addNote}/> {notes.map((noteitems,index)=> {
      return<Note key={index} id={index} title={noteitems.title} content={noteitems.Content} ondelete={ondelete}/>
      })}
    <Footer/>
    </>
    )
}

export default App;