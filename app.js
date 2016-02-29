var program = require('commander');
var fetchProducts = require('./fetchProducts')
var createQuery = require('./createQuery');
var parseResult = require('./parseResults');
var printResult = require('./printResults');
 
program
	.option('-s, --search [value]', "Search product")
	.option('-n, --number <n>', 'Number of results')
	.option('-t, --type [value]', 'Product type (beer, vine, liquire)')
	.option('-f, --food [value]', 'Type of food (meet, fish, chicken, cheese)')
	.option('-r, --random', 'Get random product');
	
program.on('--help', function(){
	console.log('  Examples:');
	console.log('');
	console.log('    $ vmp -s Austmann (Search for Austmann products)');
	console.log('    $ vpm -t beer -f fish -n 10 (Beer that goes to fish. Max 10 results)');
	console.log('');
});
 
program.parse(process.argv);

createQuery(program)
	.then(fetchProducts)
	.then(parseResult)
	.then(printResult);
