function debounce(func, delay, immediate = false) {
  let timerId;
  if(immediate===true)
	  func();
  return function() {
    const context = this;
    const args = arguments;
    
    clearTimeout(timerId);
    
    timerId = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  };
}
  
  module.exports = debounce;
