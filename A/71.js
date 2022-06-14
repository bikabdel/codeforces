n = readline();

for (i = 0; i < n; i++) {
  a = readline();
  l = a.length;
  print(l > 10 ? a[0].concat(l - 2).concat(a[l - 1]) : a);
}
