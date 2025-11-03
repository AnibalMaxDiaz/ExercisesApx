// pelis.js
const fs = require('fs');
const path = './pelis.json';

function getAll() {
  const data = fs.readFileSync(path, 'utf-8');
  return JSON.parse(data);
}
module.exports = {
  getAll
};