module.exports = function(server) {

  var router = server.loopback.Router();
  var Usuario = server.models.Usuario;

  server.models.Usuario.settings.acls = require('./user-acls.json');







  server.use(router);

};
