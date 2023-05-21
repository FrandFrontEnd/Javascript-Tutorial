// Object Literal
// var menu = {
//   nama: "ayam goreng",
//   hargaJual: 20000,
//   modal: 17800,
//   bahan: ["ayam", "lado giliang goreng", "bawang merah", "royco", "garam"],
//   margin: function () {
//     return this.hargaJual - this.modal;
//   },
//   //   juga bisa object di dalam object
// };

// Function Declaration
// function buatObjectMenu(nama, hargaJual, modal, bahan) {
//   var menu = {};
//   menu.nama = nama;
//   menu.hargaJual = hargaJual;
//   menu.modal = modal;
//   menu.bahan = bahan;
//   menu.margin = hargaJual - modal;
//   return menu;
// }
// var menu = buatObjectMenu("ayam goreng", "20000", "17500", [
//   "ayam",
//   "bawang merah",
//   "lado giliang goreng",
// ]);

// // Constructor
// function Menu(nama, hargaJual, modal, bahan) {
//   this.nama = nama;
//   this.hargaJual = hargaJual;
//   this.modal = modal;
//   this.bahan = bahan;
//   this.margin = hargaJual - modal;
// }
// // memanggilnya menggunakan keyword new
// var menu = new Menu("ayam goreng", "20000", "17500", [
//   "ayam",
//   "bawang merah",
//   "lado giliang goreng",
// ]);

// Object.create(namaObjectYangDiWarisi)
// sama seperti pewarisan pada OOP, object yang di buat akan mewarisi object yang berada di dalam parameter Object.create()
// const methodMahasiswa = {
//     makan: function (porsi) {
//       this.energi += porsi;
//       console.log(`Halo ${this.nama}, selamat main!`);
//     },
//     main: function (jam) {
//       this.energi += jam;
//       console.log(`Halo ${this.nama}, selamat main!`);
//     },
//     tidur: function (jam) {
//       this.energi += jam * 2;
//       console.log(`Halo ${this.nama}, selamat tidur!`);
//     },
//   };

//   function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
//   }

//   let lefrand = Mahasiswa("lefrand", 10);

// cara memanggil object
// namaObject.namaElement/Method(function yang ada didalam object)
