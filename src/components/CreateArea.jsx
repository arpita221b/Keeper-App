import React, { useState } from "react";

function CreateArea(){
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
     <button><i class="fa fa-plus"></i> </button>
     </form>

    </div>
  );


}

export default CreateArea;
