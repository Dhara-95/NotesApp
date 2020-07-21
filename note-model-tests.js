//Note class tests

// it("instantiated a new instance of note with empty string", function() {
//   var note = new Note();
//   expect(note.notes).toEqual([ ]);
// });

 // it('shows a list of notes', function() {
  //   var note = new Note();
  //   note.create("This is a new note.")
  //   expect(note.content).toContain("This is a new note.")
  // });

function testNoteIsInstantiatedWithText() {
  var note = new Note();
  assert.isTrue(note.content === " ");
};
testNoteIsInstantiatedWithText();

function testNoteHasContent() {
  var note = new Note();
  note.create("This is a new note.")
  assert.isTrue(note.content === "This is a new note.")
}
testNoteHasContent();

// Notes class tests
function testNotesIsInstantiatedWithEmptyArray() {
  var notes = new Notes();
  assert.isTrue(notes.array.length === 0);
};
testNotesIsInstantiatedWithEmptyArray();

function testNoteIsAddedToTheArray() {
 var notes = new Notes();
 var note = new Note();
 notes.add(note)
 assert.isTrue(notes.array.length === 1); 
};
testNoteIsAddedToTheArray();