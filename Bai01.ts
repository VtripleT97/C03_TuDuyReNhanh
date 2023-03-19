import { question } from "readline-sync";

let DTB: number = Number(question("Nhap DTB: "));
if (DTB >= 5 && DTB <= 10) {
    console.log("Dau");
}
else if (DTB > 10 || DTB <= 0) {
    console.log("Khong co diem nay");
}
else {
    console.log("Rot")
}
