var Stack = function() {
  var someInstance = {};
  	someInstance.storage = {};
  	someInstance.big = 0;
  
extend(someInstance, stackMethods);
return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};
	stackMethods.push = function(value) {
		this.storage[this.big] = value;
		this.big++;
	};
	stackMethods.pop = function() {
		var returnVal = this.storage[this.big-1];
		delete this.storage[this.big-1];
		if( this.big > 0) {
			this.big--;
			return returnVal
		}
	};
	stackMethods.size = function() {
		return this.big;
	};


