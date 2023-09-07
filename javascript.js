// let a=2;
// let b=3;
// let c=a+b;
// console.log(c);


let a=2;
let b=3;
let c=4;
let d=5;
let e=((b+a)*c)/(a*b*b)+(a-d);
//3+2*4/2*3*3+2-5
console.log(e);

let x=6;
let y=5;
if(x>y){
    console.log("benar");
}else {
    console.log("salah");
}

let nilai=80;
let kkm=70;
if(nilai>kkm){
    console.log("lulus");
}else {
    console.log("tidak lulus");	
}

let bulan=1;
let tanggal=20;
let zodiak="belum dibuat";

if(bulan==1){
    if(tanggal>0 && tanggal<20){
        zodiak="aquarius";
    }
    if(tanggal>19 && tanggal<32){
        zodiak="taurus";
    }
}
if(bulan==2){
    if(tanggal>0 && tanggal<24){
        zodiak="sagitarius";
    }
    if(tanggal>23 && tanggal<32){
        zodiak="libra";
    }
}
if(bulan==3){
    if(tanggal>0 && tanggal<30){
        zodiak="leo";
    }
    if(tanggal>29 && tanggal<32){
        zodiak="aries";
    }
}
if(bulan==4){
    if(tanggal>0 && tanggal<19){
        zodiak="scorpio";
    }
    if(tanggal>18 && tanggal<32){
        zodiak="capricorn";
    }
}
if(bulan==5){
    if(tanggal>0 && tanggal<25){
        zodiak="cancer";
    }
    if(tanggal>24 && tanggal<32){
        zodiak="pisces";
    }
}
if(bulan==6){
    if(tanggal>0 && tanggal<23){
        zodiak="gemini";
    }
    if(tanggal>22 && tanggal<32){
        zodiak="virgo";
    }
}
if(bulan==7){
    if(tanggal>0 && tanggal<20){
        zodiak="maret";
    }
    if(tanggal>19 && tanggal<32){
        zodiak="april";
    }
}
if(bulan==8){
    if(tanggal>0 && tanggal<29){
        zodiak="mei";
    }
    if(tanggal>28 && tanggal<32){
        zodiak="juni";
    }
}
if(bulan==9){
    if(tanggal>0 && tanggal<27){
        zodiak="juli";
    }
    if(tanggal>26 && tanggal<32){
        zodiak="agustus";
    }
}
if(bulan==10){
    if(tanggal>0 && tanggal<25){
        zodiak="september";
    }
    if(tanggal>26 && tanggal<32){
        zodiak="oktober";
    }
}
if(bulan==11){
    if(tanggal>0 && tanggal<19){
        zodiak="november";
    }
    if(tanggal>18 && tanggal<32){
        zodiak="desember";
    }
}
if(bulan==12){
    if(tanggal>0 && tanggal<25){
        zodiak="senin";
    }
    if(tanggal>24 && tanggal<32){
        zodiak="selasa";
    }
}
    console.log(zodiak);