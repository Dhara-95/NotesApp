'use strict';

var noteList = new NoteList();

function whenClicked() {
  var note = new Note();
  var input = document.getElementById('userInput');
  var text = input.value;
  note.create(text)
  noteList.add(note)
  addToPage(noteList);
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
    att.value = "#note" + i;
    newA.setAttributeNode(att);
    display.appendChild(newA);
    display.appendChild(lineBreak);
    var newContent = document.createTextNode(noteList.array[i].firstTwenty());
    newA.appendChild(newContent);
  }
}

makeUrlChangeShowNewNote();

function makeUrlChangeShowNewNote() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  showNote(getNoteFromUrl(window.location));
};

function getNoteFromUrl(location) {
  var url = location.hash.split("#note")[1];
  return noteList.array[url].content;
};

function showNote(summary) {
  document
    .getElementById("summary")
    .innerHTML = summary;
};
