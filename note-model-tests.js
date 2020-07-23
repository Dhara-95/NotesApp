'use strict';

//Note class tests

function testNoteIsInstantiatedWithText() {
  var note = new Note();
  assert.isTrue(note.content === "");
};
testNoteIsInstantiatedWithText();

function testNoteHasContent() {
  var note = new Note();
  note.create("This is a new note.");
  assert.isTrue(note.content === "This is a new note.");
};
testNoteHasContent();

function testNoteDisplaysFirstTwentyChars() {
  var note = new Note();
  note.create("This is a new note that has lots of characters");
  assert.isTrue(note.firstTwenty().length === 20);
};
testNoteDisplaysFirstTwentyChars();

// NoteList class tests
function testNotesIsInstantiatedWithEmptyArray() {
  var noteList = new NoteList();
  assert.isTrue(noteList.array.length === 0);
};
testNotesIsInstantiatedWithEmptyArray();

function testNoteIsAddedToTheArray() {
 var noteList = new NoteList();
 var note = new Note();
 noteList.add(note);
 assert.isTrue(noteList.array.length === 1);
};
testNoteIsAddedToTheArray();

