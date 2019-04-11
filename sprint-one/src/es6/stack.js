class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.big = 0
  }
  push(value) {
  	this.storage[this.big] = value;
	this.big++;
  }
  pop() {
  	var curVal = this.storage[this.big-1]; 
	delete this.storage[this.big-1];
	if(this.big > 0) {
		this.big--;
	}
     return curVal;
  }
  size() {
  	return this.big;
  }
}