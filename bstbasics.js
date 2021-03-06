function btNode(value) {
	this.val = value;
	this.left = null;
	this.right = null;
}

btNode.prototype.getMin = function() {
	var current = this;
	while (current.left) {
		current = current.left;
	}
	return current.val;
};

btNode.prototype.getMax = function() {
	var current = this;
	while (current.right) {
		current = current.right;
	}
	return current.val;
};

btNode.prototype.length = function() {
	var left = 0, right = 0;
	if (this.left !== null) {
		left = this.left.length();
	}
	if (this.right !== null) {
		right = this.right.length();
	}

	return 1 + left + right;
};

btNode.prototype.height = function() {
	var left = 0, right = 0;
	if (this.left !== null)
	{
		left += this.left.height();
	}

	if (this.right !== null)
	{
		right += this.right.height();
	}

	return Math.max(left, right) + 1;
};

btNode.prototype.valid = function() {
	var left = true, right = true;
	if (this.left !== null) {
		if (this.left.val > this.val) { return false; }
		left = left && this.left.valid();
	}
	if (this.right !== null) {
		if (this.right.val < this.val) { return false; }
		right = left && this.right.valid();
	}

	return left && right;
};

function bst() {
	this.root = null;

	this.add = function(value) 
	{
		var newNode = new btNode(value);
		var goNext = true;
		
		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		var current = this.root;
		while (goNext) 
		{
			if (current.val === value) { return false; }
			if (current.val < value) {
				if (current.right !== null) {
					current = current.right;
				}
				else {
					current.right = newNode;
					goNext = false;
				}
			}

			if (current.val > value) {
				if (current.left !== null) {
					current = current.left;
				}
				else {
					current.left = newNode;
					goNext = false;
				}
			}
		}
		return this;
	};

	this.contains = function(value, current)
	{
		if (current === undefined) {
			current = this.root;
		}

		if (this.root === null) {
			return false;
		}
		else if (this.root == value) {
			return true;
		}
		if (current.left === null && current.right === null) {
			return false;
		}

		if (current.val == value) {
			return true;
		}
		else if (current.val < value) {
			current = current.right;
		}
		else if (current.val > value) {
			current = current.left;
		}
		
		return this.contains(value, current);
	};

	this.isEmpty = function() {
		if (this.root === null) {
			return true;
		}
		return false;
	};

	this.min = function() {
		var current = this.root;

		if (this.root === null) {
			return false;
		}

		while (current.left) {
			current = current.left;
		}
		return current.val;
	};

	this.max = function(current) {
		if (!current) { current = this.root; }
		if (this.root === null) { return false; }
		if (current.right === null) { return current.val; }

		current = current.right;
		return this.max(current);
	};

	this.size = function() {
		if (this.root === null) { return 0; }
		return this.root.length();
	};

	this.isValid = function() {
		if (this.root === null) { return true; }
		return this.root.valid();
	};
}

bst.prototype.removeAll = function() {
	return this.root = null;
};

bst.prototype.getHeight = function() {
	return (this.root) ? this.root.height() : 0;
}

bst.prototype.isBalanced = function() {
	if (this.root)
	{
		var left = this.root.left ? this.root.left.height() : 0;
		var right = this.root.right ? this.root.right.height() : 0;

		return left === right ? true : false;
	}

	return true;
}
