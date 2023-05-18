var jmlAngkot = 10;
var angkotBaik = 6;
var noAngkot = 1;

// logic program Lefrand
// while (noAngkot <= jmlAngkot) {
//   for (noAngkot; noAngkot <= angkotBaik; noAngkot++) {
//     console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
//   }
//   console.log("Angkot No. " + noAngkot + " tidak beroperasi");
//   noAngkot++;
// }

// logic program WPU
while (noAngkot <= angkotBaik) {
  console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
  noAngkot++;
}

for (noAngkot = angkotBaik + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " tidak beroperasi dengan baik");
}
