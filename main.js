// var rakamin = "Rakamin Academy";
// var greeting = "Hello World";
// //  Camel Case
// var GreetingFirst = "Hello";
// // Snake Case
// var greeting_first = "Hello";
//
// var greetingFirst = "Hello";
// // check directory name
// var directoryName = __dirname;
// // check file name
// var fileName = __filename;

// console.log(greetingFirst);
// console.log("directory name " + directoryName);
// console.log("file name " + fileName);

// constanta harus menggunakan huruf besar
// const PI = 3.14;
// console.log(PI);

// function luasLingkaran(r) {
//     const PI = 10;
//     console.log("Luas = " + PI * r * r);
// }
// console.log("PI");
// luasLingkaran(5);

// spread_operator
// let fruits = ["apel", "mangga", "pir"];
// let num1 = [1, 2, 3];
// let num2 = [num1, 4, 5, 6];
// let num3 = [...num1, 7, 8, 9];
// let angka = [1, 2, 3, 4];
// function sum (x.y.z){

// }
// console.log(fruits);
// console.log(...fruits);
// console.log(num2);
// console.log(num3);
// sum(...angka);

// array filtering
var arr1 = [0, 1, 2, 3, 4, 5];
// filter nilai yang tidak terdapat nilai 2
var var1 = arr1.filter((val) => val !== 2);
var genap = arr1.filter((val) => val % 2 == 0);
var ganjil = arr1.filter((val) => val % 2 != 0);
console.log(var1);
console.log(genap);
console.log(ganjil);

// array map
var listData = [1, 4, 9, 16, 25];
//
var resultData1 = listData.map(Math.sqrt);
var resultData2 = listData.map((num) => num * 2);
var resultData3 = listData.map((val) => val !== 9);
// console.log(resultData1)
// console.log(resultData2)
// console.log(resultData3)

var peoples = [
    { nama: "User 1", alamat: "Street 1" },
    { nama: "User 2", alamat: "Street 2" },
    { nama: "User 3", alamat: "Street 3" },
];

function fullName(item, index) {
    var fullName = [item.nama, item.alamat].join(" ");
    return fullName;
}

function testMap() {
    console.log(peoples.map(fullName));
}

testMap();


// object_literal
let brand = 'Merk A'
let year = 2023

let product = {
    merk: brand,
    release: year
}
let productA = {
    brand,year
}

console.log(product.merk)
console.log(product.release)
console.log(productA)
