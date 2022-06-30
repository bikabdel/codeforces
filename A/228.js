a = readline()
  .split(" ")
  .map((x) => parseInt(x));
l = a.length;
print(l - new Set(a).size);
