const arr = ['|', '/', '-', '\\', "|"]; // cycle through each different symbol

let delay = 0;
let count = 0;

for (const char of arr) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, delay += 200);
}