// JavaScript source code


function hesapla() {

    event.preventDefault();

    let vize = document.getElementById("vize").value;
    let final = document.getElementById("final").value;

    let ortalama = vize * 0.4 + final * 0.6;

    document.getElementById("ortalama").innerHTML = ortalama;

    if (final >= 50 && ortalama >= 50) {

        document.getElementById("durum").innerHTML = "Gecti";

    }

    else {

        document.getElementById("durum").innerHTML = "Kaldi";

    }

    let Harf = "";

        if (final < 50) {
            Harf = "FF";
        }

        else if (ortalama < 40) {
            Harf = "FF";
        }

        else if (ortalama < 50) {
            Harf = "DF";
        }

        else if (ortalama < 57) {
            Harf = "DD";
        }

        else if (ortalama < 64) {
            Harf = "DC";
        }

        else if (ortalama < 71) {
            Harf = "CC";
        }

        else if (ortalama < 78) {
            Harf = "CB";
        }

        else if (ortalama < 85) {
            Harf = "BB";
        }

        else if (ortalama < 92) {
            Harf = "BA";
        }

        else {
            Harf = "AA";
        }
    


    document.getElementById("Harf").innerHTML = Harf;
    
}