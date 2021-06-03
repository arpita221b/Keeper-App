import React from "react";
function Note(props){
    return <div className="note">
    <h3>{props.noteTitle}</h3>
    <p>{props.noteContent}</p>

    </div>

}
export default Note;
