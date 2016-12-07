//Questions: Can you add span directly without creating a variable or do you need to collect it first


var addNote = document.querySelector('.notesarea');
var note = document.querySelector('.note');
var noteButton = document.querySelector('.newnote');

noteButton.addEventListener('click', function(event){
  var newNote = document.createElement('div');
  newNote.classList.add('note');
  var noteContent = document.createElement('div');
  noteContent.classList.add('notecontent');
  noteContent.setAttribute("contenteditable", "true");
  var span = document.createElement('span');
  span.classList.add('span');
  span.textContent = 'x';
  addNote.appendChild(newNote);
  newNote.appendChild(noteContent);
  newNote.appendChild(span);

});

var removeNote = function(event) {
  // var noteArea = document.querySelector('.notesarea'); USELESS
  // addNote.classList.remove('note'); USELESS
  // if (span.textContent === 'x') LESS DESIRABLE

  if (event.target.classList.contains('span')){
    // console.log(event.target.classList); listener to make sure only span is recorded
    event.target.parentNode.remove();
  };

};

addNote.addEventListener('click', removeNote);
