'use strict';

var noteList = new NoteList();

function whenClicked() {
  var note = new Note();
  var input = document.getElementById('userInput');
  var text = input.value;
  note.create(text)
  noteList.add(note)
  addToPage(noteList);
  // createFullNotes(noteList);
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
    console.log(att.value)
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
        console.log(window.location)
      };

      function getNoteFromUrl(location) {
        return location.hash.split("#")[1];
      };

      function showNote(display) {
        document
          .getElementById("display")
          .innerHTML = display;
      };


//   window.addEventListener('hashchange', function () {
//     hashUpdate.textContent = window.location(noteList.array[i]);
//   });
// }

//
//
// function createFullNotes(noteList) {
//   var displayAll = document.getElementById("displayAll");
//   displayAll.innerText = ""
//   for (var i = 0; i < noteList.array.length; i++)
//   {
//   var listAll = document.createElement("p");
//   var lineB = document.createElement("br");
//   listAll.appendChild(lineB);
//   var newC = document.createTextNode(noteList.array[i]);
//   listAll.appendChild(newC);
//   }
// };
