var jmlAngkot = 10;
var baikOperasi = 6;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= baikOperasi && noAngkot !== 5) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
  } else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 5) {
    console.log("Angkot No. " + noAngkot + " lembur");
  } else {
    console.log("Angkot No. " + noAngkot + " tidak beroperasi dengan baik");
  }
}
