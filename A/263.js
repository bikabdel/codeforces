for (var i = 0; i < 5; i++) {
  var j = readline().split(" ").indexOf("1");

  if (j > -1) {
    break;
  }
}
print(Math.abs(2 - i) + Math.abs(2 - j));
