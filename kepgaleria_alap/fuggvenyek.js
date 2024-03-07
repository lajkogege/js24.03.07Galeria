export function htmlOsszeAllit(lista) {
   /*állisd össze a html kódot */
   /*div <div class="kep"><img src="" alt=""></div>
    <div class="kep"><img src="" alt=""></div>
    <div class="kep"><img src="" alt=""></div>
    <div class="kep"><img src="" alt=""></div>*/
    let txt="";
    for (let index = 0; index < lista.length; index++) {
        const element =lista[index];
        console.log(element); //objektum
         txt+=`<div class="kep"><img src="${element.kep}" alt="${element.cim}"></div>`
    }
    console.log(txt);
    return txt;
}
