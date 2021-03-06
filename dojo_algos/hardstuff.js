'use strict';

// binary search tree
function BTNode(value) {
	this.value = value;
	this.l = this.r = null;
}

function BinarySearchTree() {
	this.root = null;
	this.size = 0;
}

BTNode.prototype = {
	minValue: function() {
		let cNode = this;

		while (cNode.l != null) {
			cNode = cNode.l;
		}

		return cNode;
	},
	maxValue: function() {
		let cNode = this;

		while (cNode.r != null) {
			cNode = cNode.r;
		}

		return cNode;
	}
};

BinarySearchTree.prototype = {
	insert: function(value) {
		let newNode = new BTNode(value);

		if (this.root === null) {
			this.root = newNode;
		}
		else {
			let cNode = this.root;

			while (true) {
				if (cNode.value >= value) {
					if (cNode.l === null) {
						cNode.l = newNode;
						break;
					}
					else {
						cNode = cNode.l;
					}
				}
				else {
					if (cNode.r === null) {
						cNode.r = newNode;
						break;
					}
					else {
						cNode = cNode.r;
					}
				}
			}
		}

		this.size++;
		return this;
	},
	contains: function(value) {
		let cNode = this.root;

		if (cNode === null) {
			console.log('This BST is empty!');
		}
		else {
			while (cNode) {
				if (cNode.value === value) {
					return cNode;
				}
				else if (cNode.value >= value) {
					cNode = cNode.l;
				}
				else {
					cNode = cNode.r;
				}
			}
		}

		return false;
	},
	isEmpty: function() {
		return this.root === null ? true : false;
	},
	getSize: function() {
		return this.size;
	},
	remove: function(value) {
		if (this.isEmpty()) {
			return false;
		}

		let t_node = this.root;
		let p_node = t_node;
		let c_node = p_node;
		let branch = '';
		let notLocated = true;

		while (t_node !== null && notLocated) {
			if (t_node.value === value) {
				c_node = t_node;
				notLocated = false;
			}
			else if (t_node.value >= value) {
				p_node = t_node;
				t_node = t_node.l;
				branch = 'left';
			}
			else {
				p_node = t_node;
				t_node = t_node.r;
				branch = 'right';
			}
		}

		if (t_node === null) {
			return false;
		}

		if (t_node.l === null && t_node.r === null) {
			if (branch === 'left') {
				p_node.l = null;
			}
			else {
				p_node.r = null;
			}
		}
		else if (t_node.l !== null) {
			while (c_node.l !== null) {
				p_node = c_node;
				c_node = c_node.l;
			}

			t_node.value = c_node.value;
			p_node.l = null;
		}
		else if (t_node.r !== null) {
			while (c_node.r !== null) {
				p_node = c_node;
				c_node = c_node.r;
			}

			t_node.value = c_node.value;
			p_node.r = null;
		}

		this.size--;
		return this;
	},
	maxDepth: function(node) {
		if (node) {
			return Math.max(this.maxDepth(node.l), this.maxDepth(node.r)) + 1;
		}
		else {
			return 0;
		}
	}
};

// ordered linked list implementation using es6 classes
class ListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}

	getData() {
		return this.data;
	}

	getNext() {
		return JSON.stringify(this.next, null, 2);
	}

	setProp(prop, item) {
		this[prop] = item;
		return true;
	}
}

class OrderedList {
	constructor() {
		this.head = null;
	}

	insert(data) {
		let newNode = new ListNode(data);

		if (this.head === null) {
			this.head = newNode;
		}
		else if (this.head.data > data) {
			newNode.next = this.head;
			this.head = newNode;
		}
		else {
			let cNode = this.head;
			let inserted = false;

			while (cNode.next != null && inserted !== true) {
				if (cNode.next.data > data) {
					newNode.next = cNode.next;
					cNode.next = newNode;
					inserted = true;
				}
				else {
					cNode = cNode.next;
				}
			}
			cNode.next = newNode;
		}

		return this;
	}

	display() {
		let prettyList = `Head: Value: ${this.head.getData()}, Next -> ${this.head.getNext()}`;

		return prettyList;
	}

	getSize() {
		let count = 0;
		let cNode = this.head;

		while (cNode) {
			count++;
			cNode = cNode.next;
		}

		return count;
	}

	search(data) {
		if (this.head === null) {
			return false;
		}
		else {
			let cNode = this.head;

			while (cNode !== null) {
				if (cNode.next === null) {
					if (cNode.data === data) {
						return true;
					}
					else {
						break;
					}
				}
				else if (cNode.data === data) {
					return true;
				}
				else if (cNode.next.data > data) {
					return false;
				}
				cNode = cNode.next;
			}

			return false;
		}
	}
}