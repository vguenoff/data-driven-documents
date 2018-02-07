// rest / spread test
const a1 = { a: 1, b: 2 };
const a2 = { c: 3, d: 4 };

const c = {
  ...a1,
  ...a2,
};

console.log(c);
