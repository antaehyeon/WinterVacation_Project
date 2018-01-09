var sum = require('./lib/sum');
console.log('sum', sum(1, 2));

var cal = require('./lib/calculator');
console.log('cal sum', cal.sum(1, 2));
console.log('cal avg', cal.avg(1, 2));
