import { question } from "readline-sync";

let x: number = Number(question("Nhap so nguyen duong co 3 chu so: "));

let Sohangtram = x %10;

if (Sohangtram == 9 && x >= 100 && x < 1000) {
    console.log("Yes");
}
else if (x < 100 || x >= 1000) {
    console.log("Phai la so nguyen duong co 3 chu so");
}
else {
    console.log("No");
}