n = +readline();
t = readline().split(" ").map(Number);

max = t.indexOf(Math.max(...t)) + 1;
min = t.lastIndexOf(Math.min(...t)) + 1;

print(max > min ? max + n - min - 2 : max + n - min - 1);
