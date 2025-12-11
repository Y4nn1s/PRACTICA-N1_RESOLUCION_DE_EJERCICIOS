// Se define el enum para Géneros de Películas
var GeneroPelicula;
(function (GeneroPelicula) {
    GeneroPelicula["Accion"] = "Acci\u00F3n";
    GeneroPelicula["Comedia"] = "Comedia";
    GeneroPelicula["Drama"] = "Drama";
    GeneroPelicula["CienciaFiccion"] = "Ciencia Ficci\u00F3n";
    GeneroPelicula["Terror"] = "Terror";
    GeneroPelicula["Fantasia"] = "Fantas\u00EDa";
    GeneroPelicula["Documental"] = "Documental";
})(GeneroPelicula || (GeneroPelicula = {}));

// Se define el enum para Países de Películas
var PaisPelicula;
(function (PaisPelicula) {
    PaisPelicula["EEUU"] = "Estados Unidos";
    PaisPelicula["Espana"] = "Espa\u00F1a";
    PaisPelicula["Mexico"] = "M\u00E9xico";
    PaisPelicula["Francia"] = "Francia";
    PaisPelicula["ReinoUnido"] = "Reino Unido";
    PaisPelicula["Japon"] = "Jap\u00F3n";
    PaisPelicula["India"] = "India";
})(PaisPelicula || (PaisPelicula = {}));
console.log("--- Géneros de Películas ---");

// Muestra un género específico
console.log("Un g\u00E9nero de pel\u00EDcula: ".concat(GeneroPelicula.Accion));

// Muestra todos los géneros. 
// Es una forma común de iterar sobre los valores de un enum numérico.
// Es más preciso para enums de cadena acceder a las claves o valores si se usan helpers
for (var generoKey in GeneroPelicula) {

    // Se comprueba si el valor es ciertamente un string (el valor del enum), no la clave numérica inversa
    if (isNaN(Number(generoKey))) { // Para filtrar las claves numéricas que TypeScript añade a veces
        console.log("- ".concat(GeneroPelicula[generoKey]));
    }
}
console.log("\n--- Países de Películas ---");
// Se muestra un país específico
console.log("Un pa\u00EDs de origen: ".concat(PaisPelicula.Mexico));
// Se muestra todos los países
for (var paisKey in PaisPelicula) {
    if (isNaN(Number(paisKey))) {
        console.log("- ".concat(PaisPelicula[paisKey]));
    }
}
