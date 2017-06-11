
var test = {
  data: {
    title: 'Тест по какой-то теме',
    questions: [
      {
        title: 'Вопрос #1',
        answers: ['Вариант ответа 1', 'Вариант ответа 2', 'Вариант ответа 3']
      },
      {
        title: 'Вопрос #2',
        answers: ['Вариант ответа 1', 'Вариант ответа 2', 'Вариант ответа 3', 'Вариант ответа 4']
      },
      {
        title: 'Вопрос #3',
        answers: ['Вариант ответа 1', 'Вариант ответа 2']
      }
    ]
  },
  
  myWrapper: document.querySelector('wrapper'),

  genHtml: function() {
    var title = document.createElement('h1');
    title.appendChild(document.createTextNode(this.data.title));
    this.myWrapper.appendChild(title);
    var questions = this.genQuestions();
    this.myWrapper.appendChild(questions);
    this.myWrapper.appendChild(this.addButton());
  },

  genQuestions: function(){
      var div = document.createElement('div');
      this.data.questions.forEach(function(oneQuestion, i) {
        var questionTitle = document.createElement('h3');
        questionTitle.appendChild(document.createTextNode(oneQuestion.title));
        div.appendChild(questionTitle);

        var divCheck = document.createElement('div');

        oneQuestion.answers.forEach(function(oneAnswer, n) {
          var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.id = "check" + n;

          var label = document.createElement('label')
          label.htmlFor = checkbox.id;
          label.appendChild(document.createTextNode(oneAnswer));

          divCheck.appendChild(checkbox);
          divCheck.appendChild(label);
        });

        div.appendChild(divCheck);
      });

      return div;     
  },

  addButton: function() {
    var button = document.createElement('button');
    button.type = "submit";
    button.appendChild(document.createTextNode( 'Проверить мои результаты'));

    return button;
  },

};

test.genHtml();
