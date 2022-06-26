a = readline();
b = readline()
  .split(" ")
  .map((x) => parseInt(x));

b.includes(1) ? print("HARD") : print("EASY");
