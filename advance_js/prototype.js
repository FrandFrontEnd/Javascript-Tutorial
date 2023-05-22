// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat main!`);
//   },
// Konsep prototype seperti inheritance di dalam bahasa pemrograman yang menggunakan konsep class

// Contoh dalam bentuk Inheritance Prototype
// function Mahasiswa(nama, energi) {
//   // this = Object.create(Mahasiswa.prototype); // parent object yang secara default di berikan oleh Consturctor Function
//   this.nama = nama;
//   this.energi = energi;

//   // return this; // return yang di setting di balik layar
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama} selamat makan!`;
// };

// // Contoh dalam bentuk Class
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }
//   makan(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama} selamat makan!`;
//   }
// }

// let lefrand = new Mahasiswa("lefrand", 10);
