let source = document.getElementById("question-template").innerHTML;
let template = Handlebars.compile(source);

template.ready(event => {
  event.preventDefault();
$.ajax({
  url: '/api/question',
  type:'GET',
  data:template.serialize()
}).then(
  (data) => {
    $("#question_view").append(template({question : data}));
    // console.log("api return:",data);
  }
)
.fail(err => {
  console.error(err);
});
});
