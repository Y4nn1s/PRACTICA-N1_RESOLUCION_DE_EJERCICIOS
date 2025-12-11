// Se define las dos series de enums para tipo solicitado en el ejercicio 2:

// Aquí cada nombre tiene un valor de cadena asociado que lo hace más legible y facilita su uso en el código.
enum GeneroPelicula {
    Accion = "Acción",
    Comedia = "Comedia",
    Drama = "Drama",
    CienciaFiccion = "Ciencia Ficción",
    Terror = "Terror",
    Fantasia = "Fantasía",
    Documental = "Documental"
}

// Este 'enum' define una lista fija de países.
// Esto ayudaría a evitar errores tipográficos y mejorar la coherencia en el código.
enum PaisPelicula {
    EEUU = "Estados Unidos",
    Espana = "España",
    Mexico = "México",
    Francia = "Francia",
    ReinoUnido = "Reino Unido",
    Japon = "Japón",
    India = "India"
}

console.log("--- Géneros de Películas ---");
// Para acceder a un valor específico del enum.
// Se usa el nombre de la constante para obtener su valor de cadena asociado.
console.log(`Un género de película: ${GeneroPelicula.Accion}`);

// En este caso, se utiliza un bucle para mostrar todos los géneros disponibles en el enum:

// Este término 'isNaN(Number(generoKey))' es una verificación para asegurar que solo procesamos claves de cadena del enum,
// no las claves numéricas que TypeScript añade automáticamente para enums con valores numéricos o mixtos.
for (const generoKey in GeneroPelicula) {
    if (isNaN(Number(generoKey))) {
        // Se procede a acceder al valor del enum usando la clave.
        console.log(`- ${GeneroPelicula[generoKey as keyof typeof GeneroPelicula]}`);
    }
}


console.log("\n--- Países de Películas ---");
// Para acceder a un valor específico del enum de países.
console.log(`Un país de origen: ${PaisPelicula.Mexico}`);

// Otro bucle pero para mostrar todos los países disponibles en el enum:
// Similar al bucle de géneros, se itera sobre las claves de cadena para mostrar los valores.
for (const paisKey in PaisPelicula) {
    if (isNaN(Number(paisKey))) {
        console.log(`- ${PaisPelicula[paisKey as keyof typeof PaisPelicula]}`);
    }
}
