'use strict';

class Note {

  constructor(){
    this.content = "";
  }

  create(text) {
    this.content = text
  }

  firstTwenty() {
    var string = this.content
    return string.substring(0, 20);
  }
};
 
 class NoteList {

    constructor(){
    this.array = [];
    }

    add(text) {
      this.array.push(text);
    }
    
  };
