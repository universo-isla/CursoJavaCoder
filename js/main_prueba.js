let nombre = prompt("Ingrese tu nombre");

let iluminacion = parseInt(prompt("Hola " + nombre + " vamos a comenzar el cuestionario. \n Ingresa el número correspondiente a la opción que más se acerque al lugar donde quieras que viva tu planta. \n 1. Es un cuarto sin ventanas \n2. Es un carto con muy poca entrada de luz \n 3. Es un lugar bien iluminado, hay luz pero no entra el sol;\n 4. Es un cuarto con ventana, entra el sol un par de horas al día."));

switch(iluminacion){
    case 1:
    console.log(nombre + ", desafortunadamente las plantas necesitan luz para hacer fotosíntesis, quizá una sanseveira podría ser una buena opción, pero requeriría un compromiso de poder sacarla un par de horas al día para que reciba luz.");
        break;

    case 2:
        console.log(nombre + ", un Helecho azul podría ser una buena opción. \n Son plantas que suelen vivir al cobijo de otros árboles, buena ventilación asegurará que viva saludable. ");
            break;
    
    case 3:
        console.log(nombre + ", te recomendamos una Begonia cruz de hierro; requieren un lugar bien iluminado, pero no sol directo.");
            break;

    case 4:
        console.log(nombre + ", creemos que una Pata de Elefante es la planta perfecta para tí, esta planta proveniente de zonas áridas de México resiste varias horas de sol directo al día"); //  value;
            break;
    default:
        console.log("opción inválida");
        break; //salida del caso
}