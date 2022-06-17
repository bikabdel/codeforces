n = readline();
s = readline();
k = 0;
for (i = 0; i < n; i++) {
  if (s[i] == s[i + 1]) k++;
}
print(k);
