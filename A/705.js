a = readline();

x = "I hate ";
y = "I love ";
s = "";
for (i = 0; i < a; i++) {
  i % 2 === 0 ? (s += x) : (s += y);
  s += "that ";
}
print(s.slice(0, -5) + "it");
