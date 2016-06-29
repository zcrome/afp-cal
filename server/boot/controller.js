module.exports = function(server) {

  var router = server.loopback.Router();
  var Usuario = server.models.Usuario;
  var Afp = server.models.Afp;
  var FondoAfp = server.models.FondoAfp;
  server.models.Usuario.settings.acls = require('./user-acls.json');


  var arrAfps = [{
    nombre: "HABITAT",
    comisionSaldo: 1.2,
    primaSeguro: 1.3,
    fondos:[{
      nombre: "Fondo 1",
      rentabilidad: 1.0
    },{
      nombre: "Fondo 2",
      rentabilidad: 1.2
    },{
      nombre: "Fondo 3",
      rentabilidad: 1.4
    },{
      nombre: "Fondo 4",
      rentabilidad: 2.0
    }]
  },{
    nombre: "INTEGRA",
    comisionSaldo: 1.4,
    primaSeguro: 1.6,
    fondos:[{
      nombre: "Fondo 1",
      rentabilidad: 1.0
    },{
      nombre: "Fondo 2",
      rentabilidad: 1.2
    },{
      nombre: "Fondo 3",
      rentabilidad: 1.4
    },{
      nombre: "Fondo 4",
      rentabilidad: 2.0
    }]
  },{
    nombre: "PRIMA",
    comisionSaldo: 1.9,
    primaSeguro: 1.2,
    fondos:[{
      nombre: "Fondo 1",
      rentabilidad: 1.0
    },{
      nombre: "Fondo 2",
      rentabilidad: 1.2
    },{
      nombre: "Fondo 3",
      rentabilidad: 1.4
    },{
      nombre: "Fondo 4",
      rentabilidad: 2.0
    }]
  },{
    nombre: "PROFUTURO",
    comisionSaldo: 2.2,
    primaSeguro: 0.2,
    fondos:[{
      nombre: "Fondo 1",
      rentabilidad: 1.0
    },{
      nombre: "Fondo 2",
      rentabilidad: 1.2
    },{
      nombre: "Fondo 3",
      rentabilidad: 1.4
    },{
      nombre: "Fondo 4",
      rentabilidad: 2.0
    }]
  }];



  arrAfps.forEach(function(item){

    Afp.create({
      nombre: item.nombre,
      comisionSaldo: item.comisionSaldo,
      primaSeguro: item.primaSeguro
    }, function(err, objCreated) {
      if (err) {
        console.log(err);
      }

      item.fondos.forEach(function(fondo){
        FondoAfp.create({
          nombre: fondo.nombre,
          rentabilidad: fondo.rentabilidad,
          rentabilidad: fondo.rentabilidad,
          afpId: objCreated.id
        },function(err,objFC){
          if(err){
            console.log(err);
          }
        });
      });

    });
  });








  server.use(router);

};
