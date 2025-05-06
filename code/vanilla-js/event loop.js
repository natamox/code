console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

new Promise((resolve) => {
  console.log(3);
  resolve();
}).then(() => {
  console.log(4);
  new Promise((resolve) => {
    console.log(5);
    resolve();
  }).then(() => {
    console.log(6);
  });
});

setTimeout(() => {
  new Promise((resolve) => {
    console.log(7);
    resolve();
  }).then(() => {
    console.log(8);
  });
}, 0);

console.log(9);
