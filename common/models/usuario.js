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
/*
  Usuario.afterRemoteError('create', function(ctx, next) {

      console.log("error al crear");
      console.log(ctx.args);
      console.log(ctx.error);



      ctx.res.json({
          statusCode: 403,
          message: "El e-mail ingresado ya fue registrado.\nPor favor intente con un e-mail diferente."
      });

  })

  Usuario.afterRemoteError('login', function(ctx, next) {

      console.log("error al logn");
      console.log(ctx.args.credentials.email);
      console.log(ctx.args);
      console.log(ctx.error);



          Usuario.findOne({ where: {email: ctx.args.credentials.email } }, function (err, clientFound){
            if(clientFound){
              ctx.res.json({
                statusCode: 403,
                message: "Contraseña inválida.\nPor favor inténtalo nuevamente."
              });
            }else{
              ctx.res.json({
                statusCode: 404,
                message: "Debes ingresar un e-mail válido.\nPor favor ingrésalo nuevamente."
              });
            }
          });
  });
  */

  /*
  Usuario.afterRemote('login', function(ctx, remoteMethodOutput, next) {

      console.log("user has logged in");
      console.log(ctx.args)

      console.log(remoteMethodOutput);

      Usuario.findById(remoteMethodOutput.userId, function(err, user) {
          if (err) console.log(err);
          if (!user) {
            ctx.next(new Error("User dont found"));
            return;
          }

          var tempHelper = ctx.result;
          console.log(tempHelper);
          ctx.result = {
              statusCode: 200,
              message: "OK",
              token: tempHelper.id,
              id: (user.id? user.id:null)
          };

          console.log(ctx.result);

      });
  });
*/



};
