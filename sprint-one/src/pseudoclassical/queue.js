var Queue = function() {
  this.head = 0,
  this.tail = 0,
  this.storage = {}
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.tail] = value;
	this.tail++;
};
Queue.prototype.dequeue = function() {
	var value = this.storage[this.head];
	delete this.storage[this.head];
	if(this.head < this.tail) {
		this.head++;
		return value;
	}
};
Queue.prototype.size = function() {
	return this.tail - this.head;
};


