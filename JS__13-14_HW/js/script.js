'use strict;'

var test = {
  data: {
    title: 'Тест по какой-то теме',
    questions: [
      {
        title: 'Сколько будет 2+2?',
        answers: ['3', '5', '4'],
        rightAns: 2
      },
      {
        title: 'Сколько будет 4 х 2?',
        answers: ['7', '3', '8', '15'],
         rightAns: 2
      },
      {
        title: 'Сколько будет 9 / 3?',
        answers: ['6', '3', '14'],
         rightAns: 1
      }
    ]
  }
};


  localStorage.setItem('test', JSON.stringify(test));
    console.log(JSON.stringify(test));

  var test = JSON.parse(localStorage.getItem('test'));
  


  $(function() {
  
  var html = $('#item_tmpl').html();

  var content = tmpl(html, test.data);

  $('body').append(content);



    $('.results').on('click', function(){

    var badAns = 0;

    $('input[type=radio]:checked').each(
        function() {            
              $(this).attr('value');
              $(this).attr('for');
              if(test.data.questions[$(this).attr('for')].rightAns != $(this).attr('value'))
                badAns++;
        }
      );

    if(badAns > 0) {
      $('.modal-body').html("Вы не прошли тест, у вас "+badAns+" ошибок ");
    } else if(badAns <= 0) {
      $('.modal-body').html("Вы не прошли тест, у вас "+badAns+" ошибок ");
    } else {
      $('.modal-body').html("Поздравляем! Вы прошли тест успешно!");
    }

    $('#myModal').modal('show');

  });
});

