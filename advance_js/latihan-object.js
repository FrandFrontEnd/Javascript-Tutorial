// membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      alert("angkot masih kosong");
      return false;
    }

    for (var i = 0; i < this.penumpang.length; i++) {
      if (namaPenumpang == this.penumpang[i]) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      } else if (i == this.penumpang.length - 1) {
        alert("tidak ada penumpang yang bernama " + namaPenumpang);
        return false;
      }
    }
  };
}

var angkot1 = new Angkot("lefrand", ["Napar", "Koto nan Ampek"], [], 0);

var angkot2 = new Angkot("vicho", ["Mudiak", "Napa"], [], 0);
