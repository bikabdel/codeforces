n = readline();
var b = [0, 0, 0];
for (i = 0; i < n; i++) {
  a = readline()
    .split(" ")
    .map((x) => parseInt(x));
  b[0] += a[0];
  b[1] += a[1];
  b[2] += a[2];
}
print(b.every((x) => x === 0) ? "YES" : "NO");
