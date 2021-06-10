import React, { useState } from "react";

function CreateArea(props){
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const { name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNote(event){
    props.onAdd(note);
    event.preventDefault();

  }
  return (
    <div className = "addNote">
     <form> <input
     name="title"
     onChange={handleChange}
     value={note.title}
     placeholder="Title" />

     <textarea
     name="content"
     onChange={handleChange}
     value={note.content}
     placeholder="Take a note..."
      rows="3" />
     <button onClick={submitNote} ><i class="fa fa-plus"></i> </button>
     </form>

    </div>
  );


}

export default CreateArea;
