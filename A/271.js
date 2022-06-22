s = +readline() + 1;
flag = true;
while (flag) {
  var x = s;
  new Set(x.toString().split("")).size <= 3 ? (s += 1) : (flag = !flag);
}
print(s);
