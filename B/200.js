a = +readline();
t = readline()
  .split(" ")
  .map((x) => parseInt(x))
  .reduce(function (a, b) {
    return a + b;
  }, 0);
print(t / a);
