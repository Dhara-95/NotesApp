// it("instantiated a new instance of note with empty string", function() {
//   var note = new Note();
//   expect(note.notes).toEqual(" ");
// });
  
  function testNoteisinstantiatedwithtext() {
  var note = new Note();
  assert.isTrue(note.notes === " ");
};
  testNoteisinstantiatedwithtext();
