//this is correct but for small integer
// had to redo the solution

a = readline()
  .split(" ")
  .map((x) => parseInt(x));
t = [];
for (i = 1; i <= a[0]; i++) {
  if (i % 2 === 1) t.push(i);
}
for (j = 1; j <= a[0]; j++) {
  if (j % 2 === 0) t.push(j);
}
print(t[a[1] - 1]);
