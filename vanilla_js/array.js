// Variabel yang bisa menampung banyak nilai
// * variabel jamak, yang mempunyai banyak elemen dan diacu dengan nama yang sama
// * kumpulan pasangan key dan nilai/key and value pair
// * key adalah index pada array dengan tipe integer yang dimulai dari 0
// * array pada javascript bertipe Object
// array pada javascript memiliki fungsi/method length untuk menghitung jumlah elemen di dalamnya
// * elemen pada array boleh memiliki tipe data yang berbeda

var myFunction = function (parameter) {
  return parameter;
};

var myArr = ["teks", 2, false, myFunction("argument"), [4, 5, 6]];

console.log(myArr[4][0]); // cara memanggil array
console.log(typeof myArr); // mengecek type array yaitu object
console.log(myArr.length); // menghitung banyak element didalam array
