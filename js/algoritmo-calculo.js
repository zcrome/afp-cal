edad = hoy - fechaNacimiento
anio = anio(hoy)

tipoRemuneracion = constante
	edadJubilacion = 65
	remuneracion = 1000
	cantSueldosAnio = 12
/*PENDIENTE
tipoRemuneracion = intermintente	
	edadJubilacion = 65
	arrRemuneraciones = [fechaInicio,FechaFin,Remuneracion]
PENDIENTE*/

/*PENDIENTE
Tasas de AFP staticas
	//Automatico
	AFP = {
		fondo1: {
			tasaRenta,
			etc
		}
	};
PENDIENTE*/
Tasas personalizables de AFP
	//Manual
	comisionSaldo 
	primaSeguros
	tasaRentabilidad
	fechaInicio
	fechaFin
			comisionFlujoInicial //DELETE!!!!! 
			disminucionTasaAnual //DELETE!!!!! 

//Calculo datos			
aporteAFPMensual = remuneracion * 0.1
fondoPensiones = 0
sumatoria = 0
fondoInicial = 0
TEA = tasaRentabilidad


for (var contador = 0; contador <= edadJubilacion - edad; contador++) {

	fondoInicial =  fondoPensiones
	anio = anio + contador

	for (var contador2 = 0; contador2 < 12; contador2++) {

		fondoPensiones = (fondoPensiones + aporteAFPMensual) * (1 + TEA)
		fondoPensiones = fondoPensiones - fondoPensiones * primaSeguros
	}

	comisionAFP = comisionSaldo * fondoPensiones
	fondoPensiones = fondoPensiones - comisionAFP
	//varX = fondoPensiones - fondoInicial QUE ES VARX????
	//sumatoria = sumatoria + (varX)/[(1 + x%)^contador + 1] sumatoria de quE???
	rentabilidad = (fondoPensiones - fondoInicial) / fondoInicial
	valorRentabilidad = fondoPensiones - fondoInicial

	
}

//trea = [(Capital/CapInicial)^ 360/(edadJubilacion - edad)*360] -1
//tir = solve(-inversion + sumatoria)