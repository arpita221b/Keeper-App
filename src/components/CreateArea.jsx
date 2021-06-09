import React from "react";
function CreateArea(){
  return (
    <div className = "addNote">
    <input name="title" placeholder="Title" />
    <textarea name="content" placeholder="Take a note..." rows="3" />
     <button><i class="fa fa-plus"></i> </button>

    </div>
  );


}

export default CreateArea;
