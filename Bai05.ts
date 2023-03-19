import { question } from "readline-sync";

let KW: number = Number(question("Nhap so KW dien vao: "));

if (KW < 100 && KW > 0) {
    console.log(KW * 2000);
}
else if (KW >= 100 && KW < 200) {
    console.log(KW * 2500);
}
else if (KW >= 200) {
    console.log(KW * 3500);
}
else {
    console.log("So KW phai lon hon 0")
}