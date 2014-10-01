var xml2js = require('xml2js'),
	js2xml = require('./index');

var obj1 = {
		root: {
			x: ["5"],
			y: [ 1, 2, 3 ],
			z: [{
				z1: ["10"],
				z2: [{ z3: ["15"] }]
			}]
		}
	};

var obj2 = {
		root: {
			$: { version: 1 },
			_: "a text string",
			list: { y: [ { $: { v: 2 }, attr: 10}, 2, 3] }
		}
	}

console.log(JSON.stringify(obj1, null, 4));
console.log('Example 1\n', js2xml(obj1), "\n");
xml2js.parseString(js2xml(obj1), { explicitArray: true }, function(err, res) {
	console.log(JSON.stringify(res, null, 4));
});
// console.log('===============================')
// console.log('Example 2\n', js2xml(obj2), "\n");
