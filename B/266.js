a = readline().split(" ");
s = readline();

while (a[1]--) {
  s = s.replace(/BG/g, "GB");
}

print(s);
