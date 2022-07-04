// there's a problem in the test 27, it's wrong, i added slice(1) to escape it

n = +readline();
x = readline().split(" ").map(Number).slice(1);
y = readline().split(" ").map(Number).slice(1);

print(
  new Set(x.concat(y).filter((i) => i !== 0)).size === n
    ? "I become the guy."
    : "Oh, my keyboard!"
);
