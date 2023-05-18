var jmlAngkot = 10;
var angkotBaik = 6;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBaik) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
  } else if (noAngkot == 8) {
    console.log("Angkot No. " + noAngkot + " lembur");
  } else {
    console.log("Angkot No. " + noAngkot + " tidak beroperasi dengan baik");
  }
}
