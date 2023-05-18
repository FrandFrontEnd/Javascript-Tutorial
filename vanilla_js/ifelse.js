var jmlAngkot = 10;
var angkotBaik = 6;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log(
    noAngkot <= angkotBaik
      ? "Angkot No. " + noAngkot + " beroperasi dengan baik"
      : "Angkot No. " + noAngkot + " tidak beroperasi dengan baik"
  );
}
