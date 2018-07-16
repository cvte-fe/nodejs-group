// Node.js单线程执行CPU密集型任务

const label = 'Thread';
const round = 12;

function fiboTest(n) {
  return n > 1 ? fiboTest(n - 1) + fiboTest(n - 2) : 1;
}

function run(n, i) {
  const output = fiboTest(n);
  console.log(`#${i} Fibo input ${n}, output: ${output}`);
}

console.time(label)
for(let i = 0; i < round; i++) {
  run(40, i);
}
console.timeEnd(label);

// Thread: 41219.313ms