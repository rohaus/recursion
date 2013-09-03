// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // function to loop through all child nodes
  function checkChildNodes(parent) {
  	var result = [];
  	for (var i = 0; i < parent.childNodes.length; i++) {
  	  if (parent.childNodes[i].classList === undefined) {
  	  // if the child has no class list, then it is a text node; go to the next child
  	  } else if (parent.childNodes[i].classList.contains(className)) {
  	  	// if the child has the class name, append it to the results
  	  	// then call the function on the children
  	  	result.push(parent.childNodes[i]);
  	  	if (checkChildNodes(parent.childNodes[i]).length > 0) {
  	  	  // if the child of the current child also contains the className, add the element to the array
  	  	  // combine the two arrays
  	  	  for (var index = 0; index < checkChildNodes(parent.childNodes[i]).length; index++) {
  	  		result.push(checkChildNodes(parent.childNodes[i])[index]);
  	  	  };
  	  	}
  	  } else if (checkChildNodes(parent.childNodes[i]).length > 0) {
  	  	// if the child class does not contain the current class, check this child's children
  	  	// combine the two arrays
  	  	for (var index = 0; index < checkChildNodes(parent.childNodes[i]).length; index++) {
  	  		result.push(checkChildNodes(parent.childNodes[i])[index]);
  	  	};
  	  }
    };
    return result;
  }; 
  return checkChildNodes(document.body);
};
