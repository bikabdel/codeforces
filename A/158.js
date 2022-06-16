a = readline()
  .split(" ")
  .map((x) => parseInt(x));
b = readline()
  .split(" ")
  .map((x) => parseInt(x));

if (b.every((x) => x === 0)) {
  print(0);
} else {
  l = b.filter((x) => x >= b[a[1] - 1] && x !== 0);
  print(l.length);
}
