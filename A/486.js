a = +readline();
x = 0;
while (a !== 0) {
  x += Math.pow(-1, a) * a;
  a--;
}

print(x);
