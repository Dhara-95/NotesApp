// var httpServer = require("http-server");
// var path = require("path");
//
//
// var pathToHtmlAndJsFiles = path.join(__dirname, "noteApp");
// var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
// server.listen(3000);
// (function(exports) {

  class Note {

    constructor(){
    this.content = " ";
    }

    create(note) {
      // var note
      this.content = note
    }
  };

//   exports.Note = Note;
// })(this);

// (function(exports) {
//   function Circle() {
//     this.radius = 10;
//   };
//   exports.Circle = Circle;
// })(this);
