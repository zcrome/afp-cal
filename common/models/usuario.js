module.exports = function(Usuario) {




  Usuario.afterRemote('create', function(ctx, remoteMethodOutput, next) {

      console.log(ctx.args);
      Usuario.login({
          email: ctx.args.data.email,
          password: ctx.args.data.password
      }, 'user', function(err, token) {
          if (token) {
              var tempHelper = ctx.result;
              ctx.result = {
                  statusCode: 200,
                  message: "OK",
                  token: token.id,
                  id: ctx.result.id
              };
          }
          next();
      });
  });






};
