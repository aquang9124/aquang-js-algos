// function to produce a JSON object
function outputJson(obj) {
	return JSON.stringify(obj);
}

// number of 1 bits
var hammingWeight = function(n) {
	var binaryRep = n.toString(2),
		count = 0;

	for (var i = 0; i < binaryRep.length; i++) {
		if (binaryRep[i] == 1) {
			count++;
		}
	}

	return count;
};

// test to dynamically create 10 button elements
function createButtons() {
	for (var i = 1; i <= 10; i++) {
		var btn = document.createElement("BUTTON");
		var t = document.createTextNode(i);
		btn.setAttribute("id", i);
		btn.appendChild(t);
		document.body.appendChild(btn);
	}
	document.querySelector("body").addEventListener("click", function() {
		if (event.target.tagName.toLowerCase() === 'button') {
			alert(event.target.id);
		}
	});
}

// recursive powersets
var powerSet = function(str) {
  var sets = [];
  var lib = {};

  var getSets = function(power, depth) {
    if (depth === str.length)
    {
      var key = power.split('').sort().join('');
      if (lib[key] === undefined) {
        sets.push(key);
        lib[key] = true;
      }
      return;
    }

    getSets(power, depth + 1);

    getSets(power + str[depth], depth + 1);
  };

  getSets('', 0);
  return sets;
}

// given an array of integers in range of 1 to N + 1, return missing number
function findMissing(arr) {
	var actSum = 0,
		sum = 0;

	for (var i = 1; i <= arr.length + 1; i++) {
		sum += i;
	}

	for (var j = 0; j < arr.length; j++) {
		actSum += arr[j];
	}

	return sum - actSum;
}

// function to test switch cases
function switcheroo(n) {
	switch (n) {
		case 1:
			console.log('You put in 1!');
			break;
		case 2:
			console.log('You put in 2!');
			break;
		// It will always say both console logs if you put in 3.
		case 3:
			console.log('You put in 3!');
		case 4:
			console.log('I like green eggs and ham.');
			break;
		default:
			console.log('I did\'nt find a match here.');
			break;
	}

	// Implicit return of undefined
}

// creates a triangle in the console
function createTriangle() {
	var char = '';

	for (var i = 0; i < 7; i++) 
		console.log(char += '#');

	// Omitted braces because it is a one-liner.
}
