'use strict';

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
    var newA = document.createElement("a");
    var att = document.createAttribute("href");
    var lineBreak = document.createElement("br");
    att.value = "#";
    newA.setAttributeNode(att);
    display.appendChild(newA);
    display.appendChild(lineBreak);
    var newContent = document.createTextNode(noteList.array[i].firstTwenty());
    newA.appendChild(newContent);
  }
}
