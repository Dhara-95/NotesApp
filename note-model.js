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

    create(note) {
      // this.content = note;
      this.array.push(note);
    }

    list() {
      var notes = this.array;
      text = "<ul>";
      array.forEach(myFunction);
      text += "</ul>";
      document.getElementById("notes").innerHTML = notes;
      function myFunction(value) {
       text += "<li>" + value + "</li>";
      }

    }
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
