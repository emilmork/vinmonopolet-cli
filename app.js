#!/usr/bin/env node

var program = require('commander');
var fetchProducts = require('./data/fetchProducts')
var createQuery = require('./data/createQuery');
var parseResult = require('./format/parseResults');
var printResult = require('./format/printResults');
 
program
	.option('-s, --search [value]', "Search product")
	//.option('-n, --number <n>', 'Number of results (10 is default)');
	//.option('-t, --type [value]', 'Product type (beer, vine, liquire)')
	//.option('-f, --food [value]', 'Type of food (meet, fish, chicken, cheese)');
	
program.on('--help', function(){
	console.log('  Examples:');
	console.log('');
	console.log('    $ vmp -s Austmann (Search for Austmann products)');
	console.log('    $ vmp -s *tmann (Use wildcard)');
	//console.log('    $ vpm -t beer -f fish -n 10 (Beer that goes to fish. Max 10 results)');
	console.log('');
});

if (!process.argv.slice(2).length) {
    program.outputHelp();
    return;
  }
 
program.parse(process.argv);

createQuery(program)
	.then(fetchProducts)
	.then(parseResult)
	.then(printResult)
	.catch(err => console.log("Could not get products. Try again"));
