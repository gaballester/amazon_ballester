hace 4 años y 8 meses
Activa ayer
Vista 14k veces
6
3

¿Cómo puedo saber si está instalado un determinado paquete de npm? Por ejemplo, antes de ejecutar:

npm install -g typescript@2.0.0 

¿Cómo puedo saber si ese paquete ya está instalado en la PC?
npm
Compartir
Mejora esta pregunta
Seguir
editada el 7 mar. 17 a las 22:06
Rene Limon
4,49322 medallas de oro1919 medallas de plata3232 medallas de bronce
formulada el 7 mar. 17 a las 22:03
Pablo Ezequiel Inchausti
1,19833 medallas de oro1717 medallas de plata2727 medallas de bronce

    ¿en qué sistema? – 
    Rene Limon
    el 7 mar. 17 a las 22:06
    En el sistema OSX – 
    Pablo Ezequiel Inchausti
    el 7 mar. 17 a las 22:26
    Te podes fijar en el package.json si estas haciendo algun proyecto con javascript, en dependencies – 
    Francisco
    el 5 dic. 20 a las 3:24

añade un comentario
4 respuestas
7

Lamentablemente no hay una instrucción como npm check para saber si está instalado actualmente. El comando que te puede servir es ls que te muestra una lista de los paquetes instalados. Este comando es pipable, es decir, que su salida puede integrarse en la entrada de otro comando.

Bash

npm ls | grep typescript

Powershell

npm ls | select-string typescript

Dos

npm ls | findstr "typescript"

Es cierto que lo anterior no es tan rápido; tomará más tiempo mientras más grande sea la lista de paquetes instalados. Sin embargo, puedes crear un script para que haga una búsqueda por nombre de paquete.

Ejemplo

const fs = require('fs');
const readline = require('readline');
const path = require('path');


const DEPS_DIR = path.join(process.cwd(), 'node_modules');

if (!process.argv[2]) { // los dos primeros argumentos son "node" y la ruta del script
  return console.log('\x1b[31m', 'Error: nombre de paquete inválido');
}

checkModule(process.argv[2].toLowerCase())
  .then(files => {
    console.log('\n[+] Packages found:\n');
    files.forEach(file => {

      let packageInfo = `${DEPS_DIR}/${file}/package.json`;
      let reader = readline.createInterface({
        input: fs.createReadStream(packageInfo)
      });

      reader.on('line', line => {
        if (line.includes('version')) {
          let version = line.split(':')[1].replace(/\s/g, '').replace(/"/g, '');
          console.log('\x1b[32m', `${file}@${version}`);
        }
      });
    });
  })
  .catch(err => {
    console.log(err.message);
  });


function checkModule(input) {
  return new Promise((resolve, reject) => {
    fs.readdir(DEPS_DIR, (err, files) => {
      if (err) {
        reject(
          new Error('No existe node_modules en este directorio')
        );
      } else {
        resolve(
          files
            .filter(file => file.toLowerCase().includes(input))
        );
      }
    });
  });
}
