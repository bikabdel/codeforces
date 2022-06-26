n = readline();
a = readline()
  .split(" ")
  .map((x) => parseInt(x));
t = [];
for (i = 0; i < n; i++) {
  t[i] = a.indexOf(i + 1) + 1;
}
print(t.join(" "));
