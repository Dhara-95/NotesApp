var noteList = new NoteList();

function whenClicked() {
  var note = new Note();
  // Get the input's content
  var input = document.getElementById('userInput');
  var text = input.value;
  note.create(text)
  noteList.add(note)
  addToPage(noteList)
  //   // Clear the input
  input.value = '';
}
document.getElementById('addBtn').addEventListener('click', whenClicked);

function addToPage(noteList) {

  var display = document.getElementById('display');
  display.innerText = ""
  for (var i = 0; i < noteList.array.length; i++)
  {
    var newDiv = document.createElement("div");
    display.appendChild(newDiv);
    var newContent = document.createTextNode(noteList.array[i].content);
    newDiv.appendChild(newContent);
  }
}
