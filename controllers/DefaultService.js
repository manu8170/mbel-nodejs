'use strict';

exports.userGET = function(args, res, next) {
  /**
   * authentifier un user
   * bla
   *
   * login String id du produit.
   * password String mot de passe
   * returns Boolean
   **/
  var examples = {};
  console.log(JSON.stringify(args));

  var users = [{login:"emmanuel",password:"toto"}, {login:"manuel", passwword:"toto"}, {login:"cyril", password:"toto"}];

  var user = {login:args.login.value, password:args.password.value};

  var found = false;
  found = (0 != users.filter(function(item) {
    return (user.login == item.login && user.password == item.password);
  }).length);
  
  examples['application/json'] = found;
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]], null, 2));
  } else {
    res.end();
  }
}

