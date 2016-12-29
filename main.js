var $addNoteBtn = document.querySelector('#add-note');
var $board = document.querySelector('.board');
var $noteTotal = document.querySelector('#note-total');

var renderNote = function(){
  return '<div class="note"><div class="controls"><span class="remove">x</span></div><p class="content" contenteditable="true"></p></div>';
}

var createNote = function(evt) {
  var note = renderNote();
  $board.innerHTML += note;
  updateTotal();
}

var removeNote = function(evt) {
  var node = evt.target;
  if ( !node.classList.contains('remove') ) {
    return false;
  }
  node.closest('.note').remove();
  updateTotal();
}

var countNotes = function() {
  return document.querySelectorAll('.note').length;
}

var updateTotal = function() {
  var total = countNotes();
  $noteTotal.textContent = total;
}

$addNoteBtn.addEventListener('click', createNote);
$board.addEventListener('click', removeNote);
