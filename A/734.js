a = readline();
s = readline();
A = (s.match(/A/g) || []).length;
D = (s.match(/D/g) || []).length;

print(A > D ? "Anton" : D > A ? "Danik" : "Friendship");
