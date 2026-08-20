const isFunction = v => typeof v === "function";

const isPromise = v =>
  v !== null &&
  (typeof v === "object" || typeof v === "function") &&
  typeof v.then === "function";

export { isFunction, isPromise };
