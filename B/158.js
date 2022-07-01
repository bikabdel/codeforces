a = readline();
b = readline().split(" ").map(Number);

taxi = 0;
ones = b.filter((x) => x == 1).length;
twos = b.filter((x) => x == 2).length;
threes = b.filter((x) => x == 3).length;
fours = b.filter((x) => x == 4).length;

taxi += fours + threes;
ones > threes ? (ones -= threes) : (ones = 0);

if (twos % 2 === 0) taxi += twos / 2;
else {
  taxi += ~~(twos / 2) + 1;
  ones -= 2;
}
if (ones > 0) taxi += Math.ceil(ones / 4);

print(taxi);
