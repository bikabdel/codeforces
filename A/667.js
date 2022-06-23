a = readline()
  .split(" ")
  .map((x) => parseInt(x));
b = readline()
  .split(" ")
  .map((x) => parseInt(x));
var x = 0;
for (i = 0; i < a[0]; i++) {
  b[i] > a[1] ? (x += 2) : (x += 1);
}
print(x);
