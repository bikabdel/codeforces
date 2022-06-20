a = readline().split` `.map((x) => parseInt(x));
x = a[0];
while (a[1]--) {
  x % 10 === 0 ? (x /= 10) : (x -= 1);
}
print(x);
