n = readline();

for (i = 0; i < n; i++) {
  a = readline();
  print(a.length > 10 ? a[0].concat(a.length - 2).concat(a[a.length - 1]) : a);
}
