a = readline();
k = 0;
while (a--) {
  b = readline()
    .split(" ")
    .map((x) => parseInt(x));
  if (b[1] - b[0] > 1) k++;
}
print(k);
