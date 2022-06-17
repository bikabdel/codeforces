a = readline()
  .split(" ")
  .map((x) => parseInt(x));

limak = a[0];
bob = a[1];
k = 0;
while (limak <= bob) {
  limak *= 3;
  bob *= 2;
  k++;
}
print(k);
