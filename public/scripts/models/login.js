'use strict';

var app = app || {};

(function(module) {

  let userInfo = {};
  let dbLogin = {};

  $('#user-login').on('submit', (e) => {
    e.preventDefault();
      let checkUserName = $('#user-name').val();
      let checkUserPin = $('#user-pin').val();
    console.log(checkUserName, checkUserPin);
    console.log(typeof(checkUserName), typeof(checkUserPin));
     
    dbLogin.validateUser(checkUserName, checkUserPin);

    });

  dbLogin.validateUser = (nameFromDB, pinFromDB) => {
    console.log(nameFromDB);
    $.get(`${ENV.apiUrl}/users/login/${nameFromDB}/${pinFromDB}`)
    .then(response => {
        checkIfValid(response);
        console.log('logged in');
        console.log(response);
        userInfo = response;
        console.log(userInfo);
        })
    }

function checkIfValid (returnFromDB) {
    if (!returnFromDB.length) {
        alert('Invalid username/password');
        }
    }   

module.dbLogin = dbLogin;
module.userInfo = userInfo;

})(app);