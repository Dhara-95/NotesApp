//interface file not model
var noteList = new NoteList();

function addToPage(noteList) {

  var display = document.getElementById('display');
  display.innerText = ""
  for (var i = 0; i < noteList.array.length; i++)
  {
    var newDiv = document.createElement("div");
    display.appendChild(newDiv);
    var newContent = document.createTextNode(noteList.array[i]);
    newDiv.appendChild(newContent);
  }


}
function whenClicked() {
  // Get the input's content
  var input = document.getElementById('userInput');
  var text = input.value;
  noteList.create(text)
  addToPage(noteList)
//   // Clear the input
  input.value = '';
}
document.getElementById('addBtn').addEventListener('click', whenClicked);