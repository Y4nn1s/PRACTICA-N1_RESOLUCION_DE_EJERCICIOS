// Importación de los módulos:
// El parámetro 'express' es un framework que ayuda a construir la aplicación web de Node.js.
const express = require('express');

// Este otro, 'path', vendría siendo el módulo nativo de Node.js.
// 'path' da acceso a trabajos con rutas de archivos y directorios.
const path = require('path');

// 'fs' permite interactuar con el sistema de archivos, por ejemplo, lectura de archivos.
const fs = require('fs'); 

// Comienzo de la aplicación Express:
// 'app' es la principal instancia de la aplicación Express.
const app = express();

// Se define el puerto donde el servidor recibirá las peticiones.
const port = 3000;

// Middleware para procesar datos de formularios:
// El término 'express.urlencoded({ extended: true })' permite el procesamiento de datos enviados de formularios HTML con POST.
// El acceso a estos datos es posible gracias a 'req.body', y 'extended: true' habilita el manejo de objetos y arrays complejos.
app.use(express.urlencoded({ extended: true }));

// Se define la ruta GET para la página de entrada:
// Al acceder a la URL raíz del server, esta función asume el envío del archivo 'input.html' al navegador.
app.get('/', (req, res) => {

    // Este término 'path.join(__dirname, 'input.html')' permite la construccón de la ruta completa al archivo 'input.html'.
    // Esta variable '__dirname' contiene la ruta del directorio actual.
    // EL método Express 'res.sendFile()' envía un archivo como respuesta.
    res.sendFile(path.join(__dirname, 'input.html'));

});

// Se define la ruta POST para manejo de la entrada del formulario:
// La ruta es activada cuando el usuario envía el formulario desde 'input.html'.
// La dirección '/guardar-animal' coincide con el 'action' del formulario.
app.post('/guardar-animal', (req, res) => {

    // Extracción del dato o datos del formulario:
    // El parámetro 'req.body.animal' accede al valor del campo de texto cuyo 'name' es "animal" en el formulario.
    const animalFavorito = req.body.animal;

    // Se construye la ruta al archivo 'salida.html'.
    const salidaHtmlPath = path.join(__dirname, 'salida.html');
    
    // Lectura del dato del archivo de salida:
    // El término 'fs.readFileSync()' lee de una manera síncrona el dato completo de 'salida.html'.
    // Mientras este otro término 'utf8' especifica la codificación de caracteres.
    let salidaHtmlContent = fs.readFileSync(salidaHtmlPath, 'utf8');

    // Este parámetro 'salidaHtmlContent.replace()' busca el texto '%%ANIMAL%%' en el contenido del HTML, sustituyéndolo por el valor del 'animalFavorito recibido del usuario.
    salidaHtmlContent = salidaHtmlContent.replace('%%ANIMAL%%', animalFavorito);

    // Aquí, el término 'res.send()' envía el contenido HTML modificado (en el segundo html) al navegador del usuario.
    res.send(salidaHtmlContent);
});

// En este término, 'app.listen()' permite al servidor Express que comience a "escuchar" peticiones en el puerto especificado.
// El callback se ejecuta una vez que el servidor se ha iniciado correctamente.
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

