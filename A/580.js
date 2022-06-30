n = +readline();
a = readline()
  .split(" ")
  .map((x) => parseInt(x));
max = 1;
k = 1;

for (i = 0; i < n; i++) {
  if (a[i] <= a[i + 1]) {
    k++;
    max = Math.max(max, k);
  } else k = 1;
}

print(max);
