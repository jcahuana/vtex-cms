# VTEX CMS

Este proyecto esta basado en el repositorio vtex-cms-sauce de <a href="https://github.com/alvimm/vtex-cms-sauce" target="_blank">Mauricio Alvim</a>.

Nota: Se debe tener acceso a la tienda VTEX con la que se interactuará.

## Requisitos de sistema

- Node JS (npm)

## Empezando

  Instalar los paquetes necesarios
  ```
  npm install
  ```


## Configuración

  Editar el archivo src/config.js y reemplazar STORE_NAME

  ```javascript
  const create = require('vtex-cms-sauce').create;
  const cms = create('https://STORE_NAME.vtexcommercestable.com.br');

  module.exports = cms;
  ```

## Crear template de prueba
  ```
  node src/index.js
  ```
  Se mostrará el mensaje "Insert authentication cookie:". Esta cookie la encontrarás en el navegador que hayas usado para acceder a la administración de la tienda VTEX con tu usuario.


