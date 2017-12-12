let source = document.getElementById("question-template").innerHTML;
let template = Handlebars.compile(source);

$.ajax({
  url: 'api/question'
}).then(
  (data) => {
    $("#question_view").append(template({question : data[0]}));
  },
  (err) => {
    console.error(err);
  }
)
