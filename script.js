function debounce(func, delay, immediate = false) {
  let timerId;
  
  return function() {
    const context = this;
    const args = arguments;
    
    clearTimeout(timerId);
    
    timerId = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  };let timerId;
  
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
