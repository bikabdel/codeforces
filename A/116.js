n = +readline();
c = 0;
p = 0;
while (n--) {
  a = readline()
    .split(" ")
    .map((x) => parseInt(x));
  p = p - a[0] + a[1];
  if (p > c) c = p;
}
print(c);
