values = readline().split(" ");
n = parseInt(values[0]);
m = parseInt(values[1]);
a = parseInt(values[2]);

print(
  (~~(n / a) + (n % a !== 0 ? 1 : 0)) * (~~(m / a) + (m % a !== 0 ? 1 : 0))
);
