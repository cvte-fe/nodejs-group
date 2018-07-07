// Node.js充分利用多核处理CPU密集型任务

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const label = 'Process';
const round = 12;
let each = round / numCPUs;
let p = 0;

function fiboTest(n) {
  return n > 1 ? fiboTest(n - 1) + fiboTest(n - 2) : 1;
}

function run(n, i, cb) {
  const output = fiboTest(n);
  cb(`#${i} Fibo input ${n}, output: ${output}`);
}

function messageHandler(msg) {
  console.log(msg);
}

console.time(label);

if(cluster.isMaster) {
  console.log(`主进程 ${process.pid} 正在运行`);
  for(let k = 0; k < numCPUs; k++) {
    cluster.fork();
  }

  for (const id in cluster.workers) {
    cluster.workers[id].on('message', messageHandler);
  }
} else {
  console.log(`工作进程 ${process.pid} 已启动`);
  // 根据CPU数量平分任务
  for(let i = 0; i < each; i++) {
    run(40, p++, msg => {
      process.send(msg);
    });
  }
  console.timeEnd(label);
  process.exit();
}

// Process: 24450.391ms