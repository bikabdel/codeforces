a = readline().split` `.map((x) => parseInt(x));
p = a[1] - (a[0] * a[2] * (a[2] + 1)) / 2;
print(p >= 0 ? 0 : -p);
