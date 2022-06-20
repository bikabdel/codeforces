s = readline();
upper = s.replace(/[^A-Z]/g, "").length;
lower = s.replace(/[^a-z]/g, "").length;

print(upper > lower ? s.toUpperCase() : s.toLowerCase());
