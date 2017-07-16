var info = {
  title1: 'Сколько будет 2+2?',
  answers1: ['3', '5', '4'],
  title2: 'Сколько будет 4 х 2?,',
  answers2: ['7', '3', '8'],
  title3: 'Сколько будет 9 / 3?',
  answers3: ['6', '3', '14'],
}

localStorage.setItem('info', JSON.stringify(info));

localStorage.getItem('info');


var test = {
  data: {
    title: 'Тест по какой-то теме',
    questions: [
      {
        title: title1,
        answers: answers1
      },
      {
        title: title2,
        answers: answers2
      },
      {
        title: title3,
        answers: answers3
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
