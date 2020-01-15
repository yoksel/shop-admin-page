export default function throttle(func, context, timeout) {
  let args;
  let isWaiting = false;
  let isFirstCall = true;

  return function() {
    args = arguments;

    if(isFirstCall) {
      func.apply(context, ...args);
      isFirstCall = false;
    }

    if(!isWaiting) {
      isWaiting = true;

      setTimeout(function() {
        func.apply(context, ...args);
        isWaiting = false;
      }, timeout);
    }
  }
};
