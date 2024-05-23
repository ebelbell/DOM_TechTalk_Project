/********************* TECH TALK ************************************/
//create a form for the user to add input to the blog news
//Caching DOM Elements
const cList = document.getElementById("java_CommentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");
//determine what subject the user selected to share
const cSubject = document.getElementById("cSubject");

//set the height of the input element to be 100%.
cInput.style.height = "100%";

//Event listener for the 'Add Comment' click
cBtn.addEventListener("click", addComment);
//Event listener for pressing the Enter key in the input field
cInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); //prevent the page from refreshing
    addComment();
  }
});


//event handler function for the comment input
function addComment() {
  //read and cache the value from the input element
  let comment = cInput.value;
  let subject = cSubject.value;
  if (comment === "" || (comment.length < 8 || comment.length > 250)) {
    //return if there's no value
    alert("Comment must be between 8 and 250 characters.");
    return;
  }

  //specify the user's selection of topic in the input
  if (subject === "JavaScript" || subject === "AI" || subject === "Coding Events") {
    //prepend the subject to the comment 
    comment = `${subject} - ${comment}`;
  } else if (subject === "Other - Please specify below!") {
    comment = `Other - ${comment}`;
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

