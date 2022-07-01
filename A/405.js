a = +readline();
t = readline()
  .split(" ")
  .sort(function (a, b) {
    return a - b;
  });

print(t.join(" "));
