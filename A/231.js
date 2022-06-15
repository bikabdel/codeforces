n = readline();
var c = 0;

while (n--) {
  a = readline();

  if (a[0] + a[2] + a[4] > 1) c++;
}
print(c);
