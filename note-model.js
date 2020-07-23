class Note {

  constructor(){
    this.content = "";
  }

  create(text) {
    this.content = text
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




  //first 20 chars
  // var string = this.array[0]
  // string.substring(0, 20);
