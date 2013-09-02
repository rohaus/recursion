// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  // your code goes here
  var result;
  if (obj === null) {
  	result = "null";
  } else if (typeof(obj) !== 'object'){
	  if (typeof(obj) === 'number') {
	  	result = obj.toString();
	  } else if (typeof(obj) === 'string') {
	  	result = '"' + obj + '"';
	  } else if (typeof(obj) === 'boolean') {
	  	  if (obj === true) {
		  	result = "true";
		  } else {
		  	result = "false";
		  }
	  }
	}
  else if (typeof(obj) === 'object') {
    if (obj.length === undefined) {
    	result = [];
    	for (var key in obj) {
    		if ((typeof(key) === 'function') || (typeof(key) === 'undefined') || (typeof(obj[key]) === 'function') || (typeof(obj[key]) === 'undefined')) {
    			//if not valid JSON type, do not compute anything
    		} else {
    			result.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
    		}
    	}
    	result.join(', ');
    	result = '{' + result + '}';
    } else if (obj.length !== undefined) {
    	result = [];
    	for (var i = 0; i < obj.length; i++){
    		result.push(stringifyJSON(obj[i]));
    	}
    	result = '[' + result + ']';
    }
  }
  return result;
};
