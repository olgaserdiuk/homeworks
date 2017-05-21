var title = document.createElement('h1');
title.innerHTML = 'Тест по программированию';
var wrapper = document.querySelector('wrapper');
wrapper.appendChild(title);


var questions = document.createElement('h3');
questions.innerHTML = 'Вопрос №1';
var wrapper = document.querySelector('wrapper');
wrapper.appendChild(questions);

var div = document.createElement('div');
wrapper.appendChild(div);

var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.id = "id";

var label = document.createElement('label')
label.htmlFor = "id";
label.appendChild(document.createTextNode('Вариант ответа №1'));

div.appendChild(checkbox);
div.appendChild(label);



// создать копию узла
var checkbox2 = checkbox.cloneNode(true);
var label2 = label.cloneNode(true);
  // копию можно подправить
label2.innerHTML = 'Вариант ответа №2';
  // вставим её после текущего сообщения
div.appendChild(checkbox2, checkbox);
div.appendChild(label2, label);


var checkbox3 = checkbox.cloneNode(true);
var label3 = label.cloneNode(true);

label3.innerHTML = 'Вариант ответа №3';

div.appendChild(checkbox3, checkbox);
div.appendChild(label3, label);


var questions2 = questions.cloneNode(true);
questions2.innerHTML = 'Вопрос №2';
wrapper.appendChild(questions2, questions);


var div2 = div.cloneNode(true);
wrapper.appendChild(div2, div);


var questions3 = questions.cloneNode(true);
questions3.innerHTML = 'Вопрос №3';
wrapper.appendChild(questions3, questions);

var div3 = div.cloneNode(true);
wrapper.appendChild(div3, div);



/*var test = {
  data: {
    title: 'Тест по какой-то теме',
    questions: [
      {
        title: 'Вопрос #1',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
      },
      {
        title: 'Вопрос #2',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4']
      },
      {
        title: 'Вопрос #3',
        answers: ['Вариант овтета 1', 'Вариант овтета 2']
      }
    ]
  }
};*/