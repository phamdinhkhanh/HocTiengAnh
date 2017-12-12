$.ajax({
  url: 'api/user'
}).then(
  (data) => {
    // $("#question_view").append(template({question : data[0]}));
  },
  (err) => {
    console.error(err);
  }
)
