a = readline()
  .split(" ")
  .map((x) => parseInt(x));
x = Math.ceil(a[0] / 2);
x < a[1] ? print((a[1] - x) * 2) : print(2 * a[1] - 1);
