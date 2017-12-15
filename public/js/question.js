let source = document.getElementById("question-template").innerHTML;
let template = Handlebars.compile(source);


$.ajax({
  url: '/api/question',
  type:'GET'
  // data:template.serialize()
}).then(
  (data) => {
    // console.log("api return:",data);
    $(".content").append(template({question : data[0]}));
  }
)
.fail(err => {
  console.error(err);
});


// $("#question_form").on("submit", event => {
//   event.preventDefault();
//   $.ajax({
//     url:"/api/question/updatepoint",
//     type:"POST",
//     data: $("#question_form").serialize()
//   })
//   .then(result => {
//     console.log("Post form");
//   })
//   .fail(err => {
//     console.error(err);
//   });
// })
