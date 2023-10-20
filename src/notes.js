import React,{useState} from "react";
import { notesRef } from "./firebase";
import { Form } from "react-router-dom";
import { set } from "express/lib/application";

function notes(){
    const [note,setNote] = useState("")

    const createNote = () =>{
        e.preventsDefault()
        const item = {
            task: note,
            done: false
        }
        notesRef.push(item)
        setNote("")
    }

    return(
        <form onSubmit={createNote}>
            <input type="text" value={note} onChange={(e)=> setNote(e.target.value)} placeholder="create a note"></input>
        </form>
    )
}

export default notes