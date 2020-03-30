const cms = require('../config');

const HTML = `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:vtex="http://www.vtex.com.br/2009/vtex-common" xmlns:vtex.cmc="http://www.vtex.com.br/2009/vtex-commerce" lang="en-us">
  <head>
    <title>VTEX</title>
  </head>
  <body>
    <h1>Hola, mundo!</h1>
  </body>
</html>
`;

cms
  .saveTemplate('NombreDelTemplate', HTML, false)
  .then(console.log)
  .catch(console.error)