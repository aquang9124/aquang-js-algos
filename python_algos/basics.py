import math
# python json fun
fruits = [ 
{ "name" : "apples", 
"baskets" : [10,20,30] 
}, 
{ "name" : "bananas", 
"baskets" : [5,20,10,10] 
} 
]

# Print all the fruits
def print_fruits(fruits):
	for x in range(0, len(fruits)):
		baskets_sum = 0
		print(fruits[x]['name'], end=" ")
		print(len(fruits[x]['baskets']), end=" ")

		for y in range(0, len(fruits[x]['baskets'])):
			baskets_sum += fruits[x]['baskets'][y]

		print(baskets_sum)

# return sum of all elements in list except for those between a 6 and a 7
def sum67(nums):
	result = 0
	not_in_deadzone = True

	for idx in range(0, len(nums)):
		if nums[idx] == 6:
			not_in_deadzone = False

		if not_in_deadzone == True:
			result += nums[idx]

		if nums[idx] == 7:
			not_in_deadzone = True

	return result

# check to see if there are two 2's next to each other
def has_adjacent_2(nums):

	for idx in range(0, len(nums)):
		if nums[idx] == 2 and nums[idx + 1] == 2:
			return True

	return False

# concat two lists
def concat_two_lists(arr, arr_two):
	result = arr + arr_two

	return result

arr_three = concat_two_lists([1, 2], [3, 4])

# print stars equal to string's length
def print_stars(string):
	length = len(string)

	print('*' * length)

# find all possible paths in x by y lattice
def lattice_paths(x, y):
	if x == 0 and y == 0:
		return 1
	elif x < 0 or y < 0:
		return 0

	return lattice_paths(x - 1, y) + lattice_paths(x, y - 1)

# get all possible substrings of a string
def power_sets(string, substr="", depth=0, result_list=[]):
	if depth == len(string):
		result_list.append(substr)
	else:
		power_sets(string, substr, depth + 1, result_list)
		power_sets(string, substr + string[depth], depth + 1, result_list)

	return result_list

# iterate over a list in reverse and print values
def print_reverse(array, idx=None):
	if idx == None:
		idx = len(array) - 1
	elif idx < 0:
		return True

	print(array[idx])
	return print_reverse(array, idx - 1)

# flatten a list recursively
def flatten_list(element, result=[]):
	if not isinstance(element, list):
		result.append(element)
	else:
		for i in range(0, len(element)):
			flatten_list(element[i], result)
	return result

# Practice with try/except
def get_square_root(n):
	try:
		print(math.sqrt(n))
	except:
		print('%d is not a positive number!' %(n))

def climb_stairs(n):
	if n == 0:
		return 1
	elif n < 0:
		return 0
	
	return climb_stairs(n - 1) + climb_stairs(n - 2)

def climb_stairs_two(n):
	count = 0

	def do_climb(step=0):
		if step == n:
			nonlocal count
			count += 1
			return
		elif step > n:
			return

		do_climb(step + 1)
		do_climb(step + 2)

	do_climb()

	return count

def bubble_sort(array):
	limit = 1

	for idx1 in range(len(array)):
		for idx2 in range(len(array) - limit):
			if array[idx2] > array[idx2 + 1]:
				array[idx2], array[idx2 + 1] = array[idx2 + 1], array[idx2]
		
		limit += 1

	return array

def selection_sort(arr):
	sorted_portion = 0
	min_value = arr[0]
	min_idx = 0

	for x in range(len(arr) - 1):

		for y in range(sorted_portion, len(arr)):
			if arr[y] < min_value:
				min_value = arr[y]
				min_idx = y

		arr[sorted_portion], arr[min_idx] = arr[min_idx], arr[sorted_portion]

		sorted_portion += 1
		min_idx = sorted_portion
		min_value = arr[min_idx]

	return arr

def merge_sort(arr):
	if len(arr) < 2:
		return arr

	mid = math.floor(len(arr) / 2)

	return merge_arrays(merge_sort(arr[0:mid]), merge_sort(arr[mid:]))

def merge_arrays(list1, list2):
	result = []
	p1 = 0
	p2 = 0

	while p1 != len(list1) and p2 != len(list2):
		if list1[p1] <= list2[p2]:
			result += [list1[p1]]
			p1 += 1
		else:
			result += [list2[p2]]
			p2 += 1

	if p1 == len(list1):
		result += list2[p2:]
	elif p2 == len(list2):
		result += list1[p1:]

	return result

def insertion_sort(arr):
	for i in range(1, len(arr)):
		temp = i

		while (temp > 0 and arr[temp] < arr[temp - 1]):
			arr[temp - 1], arr[temp] = arr[temp], arr[temp - 1]
			temp -= 1

	return arr

def gcd(m, n):
	while m % n != 0:
		old_m = m
		old_n = n

		m = old_n
		n = old_m % old_n

	return n

# fun with oo python
class Fraction:

	def __init__(self, top, bottom):
		self.num = top
		self.denom = bottom

	def __str__(self):
		return str(self.num) + '/' + str(self.denom)

	def __add__(self, other_fraction):
		new_num = (self.num * other_fraction.denom) + (self.denom * other_fraction.num)
		new_denom = self.denom * other_fraction.denom
		common = gcd(new_num, new_denom)

		return Fraction(new_num // common, new_denom // common)

	def __sub__(self, other_fraction):
		new_num = (self.num * other_fraction.denom) - (self.denom * other_fraction.num)
		new_denom = self.denom * other_fraction.denom
		common = gcd(new_num, new_denom)

		return Fraction(new_num // common, new_denom // common)

	def __mul__(self, other_fraction):
		new_num = self.num * other_fraction.num
		new_denom = self.denom * other_fraction.denom
		common = gcd(new_num, new_denom)

		return Fraction(new_num // common, new_denom // common)

	def __truediv__(self, other_fraction):
		temp = other_fraction.num
		other_fraction.num = other_fraction.denom
		other_fraction.denom = temp

		new_num = self.num * other_fraction.num
		new_denom = self.denom * other_fraction.denom
		common = gcd(new_num, new_denom)

		return Fraction(new_num // common, new_denom // common)

	def __eq__(self, other):
		first_num = self.num * other.denom
		second_num = self.denom * other.num

		return first_num == second_num

# fun with class composition
class Bully:
	def __init__(self, name):
		self.name = name
		self.other = Child('Billy')

	def insult(self):
		print("Bully %s says they don't like %s!" % (self.name, self.other.name))

class Child:
	def __init__(self, name):
		self.name = name

	def __str__(self):
		return '%s is an instance of the Child class' % self.name

rob = Bully('Rob')
billy = Child('Billy')
rob.insult()
print(billy)

# logic gate class
class LogicGate:
	def __init__(self, n):
		self.label = n
		self.output = None

	def get_label(self):
		return self.label

	def get_output(self):
		self.output = self.perform_gate_logic()
		return self.output

class BinaryGate(LogicGate):
	def __init__(self, n):
		LogicGate.__init__(self, n)

		self.pin_a = None
		self.pin_b = None

	def get_pin_a(self):
		return int(input("Enter Pin A input for gate %s -->" % self.get_label()))

	def get_pin_b(self):
		return int(input("Enter Pin B input for gate %s -->" % self.get_label()))

class UnaryGate(LogicGate):
	def __init__(self, n):
		super().__init__(n)

		self.pin = None

	def get_pin(self):
		return int(input("Enter Pin input for gate %s" % self.get_label()))
