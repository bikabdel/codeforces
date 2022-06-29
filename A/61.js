a = readline();
b = readline();
s = "";
for (i = 0; i < a.length; i++) {
  (a[i] === "1" && b[i] === "0") || (a[i] === "0" && b[i] === "1")
    ? (s += "1")
    : (s += "0");
}
print(s);
