import React from "react";
function Note(props){
    function handleClick(){
      props.onDelete(props.id);

    }
    return (<div className="note">
    <h3>{props.title}</h3>
    <p>{props.content}</p>
    <button onClick = {handleClick} > Delete </button>

    </div>
);
}
export default Note;
