import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const galeriaELEM=document.getElementsByClassName("galeria")[0];
console.log(galeriaELEM);

/* írd bele az összeálíltott html képsorozatot, amit a fugveny.js-ben állitottam össze */
galeriaELEM.innerHTML=htmlOsszeAllit(KEPEK);

/*2. feladat  A .nagykep divben lévő img elem megfogása */
const nagykepIMGELEM=document.querySelector(".nagykep img");
/* A .nagykep div megfogása */
const nagykepDIVELEM=document.querySelector(".nagykep");


/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const kisKEPELEMEK=document.querySelectorAll(".kep"); //lista
/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
for (let index = 0; index < kisKEPELEMEK.length; index++) {
    //const element = kisKEPELEMEK[index];
    kisKEPELEMEK[index].addEventListener("click", function katt(){
        console.log(event.target.src);
        nagykepIMGELEM.src=event.target.src;
    }
    )
}

/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */
/*function katt(){
    console.log(Event.target.src);
    nagykepIMGELEM.src=Event.target.src;
}
*/

/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
    let aktIndex=0;
    /*1. fog meg a jobb gombot*/
    const jGombElem=document.querySelector(".jobb");
    /*2. tegyél rá egy  esemény kezelőt*/
    jGombElem.addEventListener("click", jobbra)
    /*3. az index változó az aktindex változó értékét nőveld*/
    
    /*4. az aktindex változónak megfelelő kép elérési útját cseréld le a nagy kép elem img src-jében*/
    function jobbra(){
        aktIndex++;
        aktIndex=aktIndex%KEPEK.length;
        
        console.log(aktIndex);
        console.log(KEPEK[aktIndex].kep);
        nagykepIMGELEM.src = KEPEK[aktIndex].kep;
    }