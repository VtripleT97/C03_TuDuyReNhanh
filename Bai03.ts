import { question } from "readline-sync";

let a: number = Number(question("Nhap A: "));
let b: number = Number(question("Nhap B: "));
let c: number = Number(question("Nhap C: "));

if (a == b && b == c && a == c && a != 0 && b != 0 && c != 0) {
    console.log("Yes");
}
else if (a == 0 || b == 0 || c == 0) {
    console.log("Dang co 1 canh la 0");
}
else {
    console.log("No");
}