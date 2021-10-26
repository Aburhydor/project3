document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('myForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var user = document.getElementById('users').value;
    var users = user.split(' ').join('');
    var gitHub = document.getElementById('result').textContent;

    //console.log(users);
    fetch('https://api.github.com/users/' + users)
      .then((result) => result.json())
      /*.then((data) => {
      console.log(data);
      document.getElementById(
        'result'
      ).innerHTML = `<a target='_blank' href='https://api.github.com/users/${users}'><img src=${data.avatar_url}/></a>`;
    });*/
      .then((data) => {
        if (data.message) {
          console.log('User not found');
          document.getElementById(
            'result'
          ).innerHTML = `<h3>User not found</h3>`;
        } else {
          //console.log(data);
          document.getElementById(
            'result'
          ).innerHTML = `<li><img src="${data.avatar_url}" style="width:50%"></li>
        <li>Name: ${data.name}</li>
        <li>Username: ${data.login}</li>
        <li>Followers: ${data.followers}</li>
        <li>following: ${data.following}</li>
        <li>Public repo: ${data.public_repos}</li>`;
        }
        valueSender();
      })

      .catch((e) => {
        console.log(e);
      });
    //valueSender();

    //    playerOne();
  });

  function valueSender() {
    var result = document.getElementById('result').innerHTML;
    localStorage.setItem('myResult', result);
    window.location.href = 'playertwo.html';
  }
  var b = localStorage.getItem('myResult');
  console.log('The Value Received is ' + b);
  //localStorage.setItem('myResult', resetValue);
  //var resul = document.getElementById('play1');

  //function playerOne() {
  // var b = window.localStorage.getItem('myResult');
  // resul.innerHTML = b;

  // var resetResult = 0;
  //localStorage.setItem('myResult', resetResult);
  //  }

  //let url = 'https://api.github.com/users/' + username;
  /*fetch(url)
   .then((result) => result.json())
    .then((data) => {
      if (data.message) {
        console.log('User not found');
        document.getElementById('result').innerHTML = `<h3>User not found</h3>`;
      } else {
        console.log(data);
        document.getElementById(
          'result'
        ).innerHTML = `<img src="${data.avatar_url}" style="width:50%">
          <p>${data.name}(${data.login})</p>
          <p>${data.bio}</p>`;
      }
    })
    .catch((e) => {
      console.log(e);
    });*/
  //}
  /*var form = document.getElementById('myFrom');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var search = document.getElementById('player1').value;
  console.log(search);
})*/
});
