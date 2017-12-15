let userInfomation = document.getElementById("userInfo").innerHTML;
let template = Handlebars.compile(userInfomation);


$.ajax({
  url: '/api/user/information',
  type:'GET'
  // data:template.serialize()
}).then(
  (data) => {
    // console.log("api return:",data);
    $('.container').append(template({user : data[0]}));
  }
)
.fail(err => {
  console.error(err);
});
