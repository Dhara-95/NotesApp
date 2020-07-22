// var httpServer = require("http-server");
// var path = require("path");
//
//
// var pathToHtmlAndJsFiles = path.join(__dirname, "noteApp");
// var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
// server.listen(3000);

  class Note {

    constructor(){
    // this.content = " ";
    this.array = [];
    }

    create(text) {
      // this.content = note;
      this.array.push(text);
    }


    // list() {
    //   var notes = this.array;
    //   var text = "<ul>";
    //   notes.forEach(myFunction);
    //   text += "</ul>";
    //
    //   function myFunction(value) {
    //     document.getElementById("userInput").innerHTML = notes;
    //    text += "<li>" + value + "</li>";
    //   }
    //
    // }
  };

//
// class Notes {
//
//   constructor(){
//     this.array = [];
//   }
//
//   add(note) {
//     this.array.push(note)
//     console.log(note)
//   }
//
// //   list() {
//   return this.array;
//   text = "<ul>";
//   array.forEach(myFunction);
//   text += "</ul>";
//   }
//   }
//   makeSubmitButtonPrintNotes() {
//   document.getElementById("submitbtn").innerHTML = text;
//   document.addEventListener("click", function(clickEvent) {
//     clickEvent.preventDefault();
//     list();
//   });
// };
//


  //first 20 chars
  // var string = this.array[0]
  // string.substring(0, 20);
