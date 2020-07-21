// it("instantiated a new instance of note with empty string", function() {
//   var note = new Note();
//   expect(note.notes).toEqual([ ]);
// });

function testNoteisinstantiatedwithtext() {
  var note = new Note();
  assert.isTrue(note.content === " ");
};
  testNoteisinstantiatedwithtext();

function testNotehascontent() {
  var note = new Note();
  note.create("This is a new note.")
  assert.isTrue(note.content === "This is a new note.")
}
testNotehascontent();


  // it('shows a list of notes', function() {
  //   var note = new Note();
  //   note.create("This is a new note.")
  //   expect(note.content).toContain("This is a new note.")
  // });