"use strict";

const constant = value => () => value;

const add = (x, y) => x + y;

const add2 = (fn1, fn2) => {
  return add(fn1(), fn2());
}

const addnReduce = fns => {
  return fns.reduce(
    (acc, currentFn) => add2(constant(acc), currentFn),
    0
  )
};

const addnLoop = fns => {
  let acc = 0;
  for (const fn of fns) {
    acc = add2(constant(acc), fn)
  }
  return acc;
}

const addnRecursive = ([first, second, ...rest]) => {
  if (rest.length === 0) return add2(first, second);
  return addnRecursive([() => add2(first, second), ...rest]);
}

console.log(add(constant(4)(), constant(14)()));
console.log(addnReduce([constant(4), constant(8), constant(100)]));
console.log(addnReduce([constant(4), constant(8)]));
console.log(addnLoop([constant(4), constant(8), constant(100)]));
console.log(addnRecursive([constant(4), constant(8), constant(100)]));