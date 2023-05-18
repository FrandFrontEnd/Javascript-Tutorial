// 1. Menambah isi Array
// * jika indeks nya terlewat maka indeks yang di lewati diisi dengan undefined
// var arr = []; // deklarasi penampung array
// arr[0] = "Lefrand";
// arr[1] = "Septiand";
// arr[2] = "Maydi";
// arr[3] = "Dah lah";

// 2. Menghapus isi Array
// var arr = ["Lefrand", "Septiand", "Maydi"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi Array dengan benar menggunakan looping
// var arr = ["Lefrand", "Septiand", "Maydi"];
// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Method pada Array
// 1. join (merubah isi array menjadi string dan menampilkannya secara default menggunakan koma)
// var arr = ["Lefrand", "Septiand", "Maydi"];
// console.log(arr.join(" "));

// 2. push & pop
// var arr = ["Lefrand", "Septiand", "Maydi"];
// arr.push("Dah"); // menambah element baru
// arr.pop(); // menghapus elemnt terakhir

// 3. unshift & shift
// var arr = ["Lefrand", "Septiand", "Maydi"];
// // arr.unshift("dah"); // menambahkan element baru di awal array
// arr.shift(); // menghapus element pertama pada array

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// var arr = ["Lefrand", "Septiand", "Maydi"];
// arr.splice(1, 2, "Dah");

// 5. slice
// slice(indexAwal, akhir)
// var arr = ["Lefrand", "Septiand", "Maydi", "Dah", "lah"];
// var arr2 = arr.slice(0, 3);
// console.log(arr2.join(" "));

// 6. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var arr = ["Lefrand", "Septiand", "Maydi", "Dah", "lah"];

// angka.forEach(function (e) {
//   console.log(e);
// });
// arr.forEach(function (e, i) {
//   console.log("Mahasiswa ke-" + (i + 1) + " adalah : " + e);
// });

// 7. map (mengembalikan nilai array)
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2);

// 8. sort
// var angka = [2, 10, 4, 52, 6, 7, 8];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka);

// 9. filter (mengembalikan nilai array)
// var angka = [2, 10, 4, 52, 6, 7, 8];
// var angka2 = angka.filter(function (x) {
//   return x >= 10;
// });
// console.log(angka2);

// 10. find (mengembalikan 1 nilai dan bukan array)
// var angka = [2, 10, 4, 52, 6, 7, 8];
// var angka2 = angka.find(function (x) {
//   return x >= 10;
// });
// console.log(angka2);
