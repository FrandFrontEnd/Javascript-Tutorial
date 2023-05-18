var penumpang = ["lefrand", "vicho", "sischa"];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambahkan penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;

        return penumpang;
      }
      //   jika sudah ada nama yang sama
      else if (namaPenumpang == penumpang[i]) {
        alert("penumpang sudah ada");

        return penumpang;
      }
      //   jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);

        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tampilkan pesan angkot kosong
    console.log("Angkot masih kosong!");
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika nama penumpang sesuai
      if (namaPenumpang == penumpang[i]) {
        // hapus penumpang dengan mengubahnya menjadi undefined
        penumpang[i] = undefined;

        return penumpang;
      }
      //  jika tidak ada nama yang sesuai
      else if (i == penumpang.length - 1) {
        // tampilkan pesan kesalahan
        console.log("tidak ada penumpang dengan nama " + namaPenumpang);

        return penumpang;
      }
    }
  }
};
