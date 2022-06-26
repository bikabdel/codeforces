a = +readline();

x = +readline();
b = x;
k = 0;
while (a--) {
  x = +readline();

  if (b !== x) k++;
  b = x;
}
print(k === 0 ? 0 : k);
