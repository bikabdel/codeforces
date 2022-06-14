n = readline();
var c = 0;

while (n--) {
  a = readline();

  if (parseInt(a[0]) + parseInt(a[2]) + parseInt(a[4]) > 1) c++;
}
print(c);
