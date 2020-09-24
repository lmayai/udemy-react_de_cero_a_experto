//Template strings
const n = 'juan';
const a = 'jaramillo';

function getSaludo() {
  return 'hi'
}

//uso de backtips
const nombre = `
${getSaludo()} ${n} ${a} 
tiene ${22}
${ 'aqui hay codigo JS' }
`;

console.log(nombre)