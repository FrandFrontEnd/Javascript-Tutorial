var s = "";

for (var i = 0; i < 10; i++) {
  for (var b = 0; b <= i; b++) {
    s += "*";
  }
  s += "\n";
}

console.log(s);
