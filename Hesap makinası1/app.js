// var sayi= prompt("Lütfen sayı giriniz.");
// var sayi1= prompt("Lütfen sayı giriniz.");
// var islem=prompt("Lütfen işlem  seçiniz");
// if(islem=="+")
// {
//     document.getElementById("sayi").innerHTML +document.getElementById("sayi1").innerHTML 

// }
document.getElementById('tarih').innerHTML=new Date();
function topla()
{
  

 
    
    document.getElementById("sonuc").innerHTML=Cevir("s1")+Cevir("s2")

    // var sayi=Number(prompt("Bir değer giriniz","lütfen sayi giriniz.."))
    // var sayi2=Number(prompt("Bir değer giriniz","lütfen sayi giriniz.."))
    // document.write(sayi+sayi2)
}


function cıkar()
{
    
    // var s1=Cevir("s1")
    // var s2=Cevir("s2")
    // var toplam=s1-s2;
    // document.getElementById("sonuc").innerHTML="Girilen Sayıların Çıkarması : "+toplam;
    Yaz(Cevir("s1")-Cevir("s2"))
}
function carp()
{
    
 Yaz(Cevir("s1")*Cevir("s2"))
}
function bol()
{
   Yaz(Cevir("s1")/Cevir("s2"))
  
}
function Cevir(id)
{
  
     return Number(document.getElementById(id).value);

}
function Yaz(sonuc)
{
  
    document.getElementById("sonuc").innerHTML=sonuc;

}
