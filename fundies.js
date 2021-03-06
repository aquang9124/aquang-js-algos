// Messy Math Mashup
function messyMath(num) {
	var sum = 0;
	for (var i = 0; i <= num; i++) {
		if (i === num / 3) {
			return -1;
		}
		else if (i % 3 === 0) {
			continue;
		}
		else if (i % 7 === 0) {
			sum += (i*2);
		}
		else {
			sum += i;
		}
	}

	return sum;
}

// extract-o-matic
function extractDigit(num, digit) {
	num = num.toString().split("");

	if (digit >= num.length) {
		return 0;
	}

	if (digit == 0) {
		return num[num.length - 1];
	}
	else if (digit > 0) {
		digit += 1;
		return num[num.length - digit];
	}
	else {
		digit -= 1;
		digit = Math.abs(digit);
		return num[num.length - digit];
	}
}

// CountTo 10
function countTo(start) {
	if (start === undefined) {
		start = 1;
	}

	if (start > 10) {
		return start;
	}

	console.log(start);
	return countTo(start + 1);
}

// clock hand angles
function clockHandAngles(seconds) {
	var hours = 0,
		minutes = 0,
		hourDegs = 0,
		minuteDegs = 0,
		secondDegs = 0;

	while (seconds >= 3600) {
		hours += 1;
		seconds -= 3600;
	}

	while (seconds >= 60) {
		minutes += 1;
		seconds -= 60;
	}

	hourDegs = hours * 30;
	minuteDegs = minutes * 6;
	secondDegs = seconds * 6;

	return [hourDegs, minuteDegs, secondDegs];
}

// Most significant digit
function mSDigit(num) {
	
	while (num >= 10) {
		num = Math.floor(num / 10);
	}

	return num;
}

// Create Kari, a wanderer
function Wanderer(name) {
	this.name = name;
	this.home = {
		x: 0,
		y: 0
	};
	this.location = {
		x: 0,
		y: 0
	};
	
}

Wanderer.prototype.reset = function() {
	this.location.x = this.home.x;
	this.location.y = this.home.y;

	return this;
};

Wanderer.prototype.move = function(x, y) {
	this.location.x += x;
	this.location.y += y;

	return this;
}

Wanderer.prototype.xDistance = function() {
	return Math.abs(this.location.x);
}

Wanderer.prototype.yDistance = function() {
	return Math.abs(this.location.y);
}

// push front
function pushFront(arr, value) {
	for (var i = arr.length; i > 0; i--) {
		arr[i] = arr[i - 1];
	}

	arr[0] = value;
	return arr;
}

// pop front

// Helper function
function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;

	return arr;
}

// Actual implementation
function popFront(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		swap(arr, i, i + 1);
	}

	arr.pop();
	return arr;
}

// insert at
function insertAt(arr, idx, val) {
	for (var i = arr.length; i > idx; i--) {
		arr[i] = arr[i - 1];
	}

	arr[idx] = val;
	return arr;
}

// remove at
function removeAt(arr, idx) {
	for (var i = idx; i < arr.length - 1; i++) {
		swap(arr, i, i + 1);
	}

	arr.pop();
	return arr;
}

// swap array pairs
function swapPairs(arr) {
	var count = Math.floor(arr.length / 2),
		idx = 0;

	while (count--) {
		swap(arr, idx, idx + 1);
		idx += 2;
	}

	return arr;
}

// Remove duplicates from sorted arrayk
function removeDupes(arr) {
	
	for (var i = 0; i < arr.length - 1; i++) {
		if (arr[i] === arr[i + 1]) {
			var idx = i;
			while (idx < arr.length - 1) {
				swap(arr, idx, idx + 1);
				idx++;
			}
			arr.pop();
		}
	}

	return arr;
}

// skyline heights, heights of consecutive buildings
function skylineHeights(arr) {
	var max = arr[0];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}

		if (arr[i] < 0 || arr[i] < max) {
			var idx = i;
			while (idx < arr.length - 1) {
				swap(arr, idx, idx + 1);
				idx++;
			}
			arr.pop();
			i--;
		} 
	}

	return arr;
}

// Remove negatives without nested loops
function removeNegatives(arr) {
	var count = 0;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) {
			arr[i - count] = arr[i];
		} else {
			count++;
		}
	}

	arr.length = arr.length - count;
	return arr;
}

// Array min to front
function minToFront(arr) {
	var min = arr[0],
		minIdx = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
			minIdx = i;
		}
	}

	for (var j = minIdx; j > 0; j--) {
		swap(arr, j, j - 1);
	}

	return arr;
}

// rotate array
function rotateArray(arr, offset) {
	while (offset--) {
		var idx = arr.length - 1;
		var temp = arr[arr.length - 1];

		while (idx > 0) {
			arr[idx] = arr[idx - 1];
			idx--;
		}
		arr[0] = temp;
	}

	return arr;
}

// binary search
function bSearch(arr, val) {
	var min = 0,
		max = arr.length - 1,
		mid = Math.floor((min + max) / 2);

	while (min <= max) {
		mid = Math.floor((min + max) / 2);
		if (arr[mid] > val) {
			max = mid - 1;
		}
		else if (arr[mid] < val) {
			min = mid + 1;
		}
		else {
			return mid;
		}
	}

	return false;
}

// recursive binary search
function rBinarySearch(arr, val, mid, min, max) {
	if (typeof min === 'undefined' || max === undefined) {
		min = 0;
		max = arr.length - 1;
	}

	mid = Math.floor((min + max) / 2);

	if (min > max) {
		return false;
	}
	else if (arr[mid] > val) {
		max = mid - 1;
		return rBinarySearch(arr, val, mid, min, max);
	}
	else if (arr[mid] < val) {
		min = mid + 1;
		return rBinarySearch(arr, val, mid, min, max);
	}
	else {
		return mid;
	}
}

// filter range
function filterRange(arr, min, max) {
	var newArr = [];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < max && arr[i] > min) {
			continue;
		} else {
			newArr.push(arr[i]);
		}
	}

	arr = newArr;
	return arr;
}

// zip it, insert values at alternating indices
function zipIt(arr, arr2) {
	var idx = 1;
	while (arr2.length > 0 && idx <= arr.length) {
		for (var i = arr.length; i > idx; i--) {
			arr[i] = arr[i - 1];
		}

		arr[idx] = arr2.shift();
		idx += 2;
	}

	while (arr2.length > 0) {
		arr.push(arr2.shift());
	}

	return arr;
}

// Recursive fibonacci
function rFibonacci(n) {
	if (n === 0 || n === 1) {
		return n;
	}

	return rFibonacci(n - 1) + rFibonacci(n - 2);
}

// Merge sort
function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	var mid = Math.floor(arr.length / 2),
		left = arr.slice(0, mid),
		right = arr.slice(mid, arr.length);

	return merge(mergeSort(left), mergeSort(right));
}

// Helper function
function merge(left, right) {
	var results = [];

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}

	while (left.length) {
		results.push(left.shift());
	}

	while (right.length) {
		results.push(right.shift());
	}

	return results;
}

// Return second to last element of array
function nextToLast(arr) {
	if (arr.length > 2) {
		return arr[arr.length - 2];
	}
	
	return arr[0];
}

// Return second largest element of array
function closeToMax(arr) {
	var max = arr[0],
		closeMax = arr[0];

	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	for (var j = 1; j < arr.length; j++) {
		if (arr[j] > closeMax && arr[j] < max) {
			closeMax = arr[j];
		}
	}

	return closeMax;
}

// print 1 to 255 recursive
function rPrint1To255(i) {
	if (i === undefined) {
		i = 1;
	}

	if (i === 255) {
		return i;
	}

	console.log(i);
	return rPrint1To255(i + 1);
}

// return nth-largest value in the array
function nthLargest(arr, n) {
	var idx = 0;

	if (n > arr.length) {
		return false;
	}

	while (idx < arr.length) {
		var current = arr[idx];
		var count = 0;
		for (var i = idx + 1; i < arr.length; i++) {
			if (arr[i] > current) {
				count += 1;
			}
		}

		if (count == (n - 1)) {
			return current;
		}

		idx++;
	}
}

// recreate array concat function
function concatenate(arr, arr2) {
	var arr3 = [];

	for (var i = 0; i < arr.length; i++) {
		arr3.push(arr[i]);
	}

	for (var j = 0; j < arr2.length; j++) {
		arr3.push(arr2[j]);
	}

	return arr3;
}

// intermediate sums
function interSums(arr) {
	var sum = 0;

	for (var i = 0; i < arr.length; i++) {

		if (i > 0 && i % 10 === 0) {
			for (var j = arr.length; j > i; j--) {
				arr[j] = arr[j - 1];
			}

			arr[i] = sum;
			sum = 0;
			continue;
		}

		sum += arr[i];
	}

	arr[arr.length] = sum;

	return arr;
}