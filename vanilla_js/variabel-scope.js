// variabel scope ada 2
// 1. block scope (variabel yang memiliki block block di dalam code,seperti variabel yang ada di dalam function dan di luar function yang memiliki scope berbeda)
// 2. function scope (variabel yang tetap bisa di panggil walaupun berada di luar scope nya)

var a = 1; // bisa di akses dan di gunakan oleh function / bisa diakses dengan menggunakan window.a

function tes() {
  var b = 2; // tidak bisa di akses dari luar function ini
  console.log(a);
}

tes();
