// var httpServer = require("http-server");
// var path = require("path");
//
//
// var pathToHtmlAndJsFiles = path.join(__dirname, "noteApp");
// var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
// server.listen(3000);

  class Note {

    constructor(){
    this.content = " ";
    }

    create(note) {
      this.content = note
    }
  };


class Notes {

  constructor(){
    this.array = [];
  }

  add(note) {
    this.array.push(note)
  }
};