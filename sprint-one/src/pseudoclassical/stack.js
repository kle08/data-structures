var Stack = function() {
	this.big = 0;
	this.storage = {};

};

Stack.prototype.push = function(value) {
	this.storage[this.big] = value;
	this.big++;
};
Stack.prototype.pop = function() {
	var curVal = this.storage[this.big-1]; 
	delete this.storage[this.big-1];
	if(this.big > 0) {
		this.big--;
		
	}
	return curVal;
};
Stack.prototype.size = function() {
	return this.big;
};


