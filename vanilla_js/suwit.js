var tanya = true;

while (tanya) {
  // menangkap pilihan player
  var pilihanUser = prompt("pilih : gajah, semut, orang");

  // menangkap pilihan computer

  // membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp > 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  // menentukan rules
  var hasil = "";

  if (pilihanUser == comp) {
    alert("hasilnya seri!");
    hasil = "Seri!";
  } else if (pilihanUser == "gajah") {
    hasil = comp == "orang" ? "Menang" : "Kalah";
  } else if (pilihanUser == "semut") {
    hasil = comp == "gajah" ? "Menang" : "Kalah";
  } else if (pilihanUser == "orang") {
    hasil = comp == "semut" ? "Menang" : "Kalah";
  } else {
    hasil = "Tolong masukkan inputan sesuai dengan pilihan!";
  }

  // tampilkan hasilnya
  alert(
    "Kamu memilih: " +
      pilihanUser +
      " \nKomputer memilih: " +
      comp +
      "\nHasilnya kamu: " +
      hasil
  );

  tanya = confirm("lagi?");
}

alert("Terima Kasih sudah bermain :)");
