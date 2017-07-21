'use strict;'

function Test() {
  this.question = 'some question';
  this.answers = []; 
}

function TestRadio() {
  this.rightAnswer = '';
  this.type = 'radio';
}

TestRadio.prototype = new Test();

function TestCheckbox() {
  this.rightAnswer = [];
  this.type = 'checkbox';
}

TestCheckbox.prototype = new Test();

var a = new TestCheckbox();
console.log(a.question);

var arrStorage = [];

$('.mybutton').click(function(){      
  event.preventDefault();
  if ($('input[name=myCheck').prop('checked') == true) {    
    var temp = new TestRadio();
    temp.rightAnswer = $('input[name=rightAnswers]').val();
  } else {
    var temp = new TestCheckbox();
    temp.rightAnswer = $('input[name=rightAnswers]').val().split('#');
  }

  temp.question = $('input[name=question]').val();
  temp.answers = $('input[name=answers]').val().split('#');

  arrStorage.push(temp);

  $('.row')[0].reset();

$('#message').show();

$('.buttonsave').click(function(){ 
   localStorage.setItem('storage', JSON.stringify(arrStorage));
    console.log(JSON.stringify(arrStorage));

  var storage = JSON.parse(localStorage.getItem('storage'));

});

})


