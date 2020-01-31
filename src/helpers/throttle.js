// https://learn.javascript.ru/task/throttle

export default function throttle (func, context, timeout) {
  let args;
  let isRunned = false;
  let savedArgs;

  function wrapper () {
    args = arguments;

    if (isRunned) {
      // Just save arguments
      savedArgs = args;
      return;
    }

    func.apply(context, args);
    isRunned = true;

    setTimeout(function () {
      func.apply(context, savedArgs);
      isRunned = false;
    }, timeout);
  };

  return wrapper;
}
