

/********************* TECH TALK ************************************/
//create a form for the user to add input to the blog news
//Caching DOM Elements
const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");


cBtn.addEventListener("click", addComment);
cInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addComment();
  }
});


//event handler function for the comment input
function addComment() {
  //read and cache the value from the input element
  let comment = cInput.value;
  if (comment === "") {
    //return if there's no value
    return;
  }

  //add the value to the comment list element
  let listItem = document.createElement("li");
  listItem.textContent = comment;
  
  //push the new list item to the top of the list
  cList.prepend(listItem);
  //cList.prepend(listItem);

  //clear the input element
  cInput.value = ""; //empty string
  
  //focus the input element
  cInput.focus();
}

