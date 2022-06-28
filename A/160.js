a = +readline();
t = readline()
  .split(" ")
  .map((x) => parseInt(x))
  .sort(function (a, b) {
    return a - b;
  })
  .reverse();

for (i = 1; i < a; i++) {
  sum1 = t.slice(0, i).reduce((a, b) => a + b, 0);
  sum2 = t.slice(i).reduce((a, b) => a + b, 0);
  if (sum1 > sum2) {
    break;
  }
}
print(i);
