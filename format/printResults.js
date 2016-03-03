var marked = require('marked');
var TerminalRenderer = require('marked-terminal');

marked.setOptions({
  renderer: new TerminalRenderer()
});

module.exports = (results) => {
  if (!results || !results.length) {
    console.log(marked('No products found`'));
    return;
  }
  console.log(marked('# Products \n' + productsMarked(results)));
}

function productsMarked(products) {
  return products.map(productMarked).join(newLine())
}

function productMarked(product, i) {
  return `* ${product.name} | ${product.price},-` + newLine()
    + '>' + highlighted(product.description) +' | ' + product.food + newLine()
    + '>' + product.url + '                                                                                               ';
}

function highlighted(text) {
  return '`' + `${text}` + '`'; 
}

function newLine() {
  return '\n';
}