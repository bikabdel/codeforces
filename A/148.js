var k = +readline();
var l = +readline();
var m = +readline();
var n = +readline();
var d = +readline();
var c = 0;
for (var i = 1; i <= d; i++)
  if (i % k === 0 || i % l === 0 || i % m === 0 || i % n === 0) c++;
print(c);
