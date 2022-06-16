n = readline();
x = 0;
while (n--) {
  a = readline();
  a.includes("+") ? x++ : x--;
}
print(x);
