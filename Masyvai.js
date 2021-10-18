// 1.Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30,
// o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (money);
console.log("1.");
const wallet = [];
const money = [];
const wl = Math.floor(Math.random() * 21 + 10);
for (let i = 0; i < wl; i++) {
    wallet[i] = Math.floor(Math.random() * 11)
}
console.log(wallet);
// 2.Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
console.log("\n2.");
let sum = 0;
for (let i = 0; i < wallet.length; i++) {
    sum += wallet[i];
}
console.log(sum);
// 3.Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
console.log("\n3.");
let sum1 = 0;
for (let i = 0; i < wallet.length; i++) {
    if (wallet[i] > 2) {
        sum1 += wallet[i];
    }
}
console.log(sum1);
// 4.Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
console.log("\n4.");
const map1 = wallet.map((x) => (x <= 2 ? 0 : x));
console.log(map1);
// 5.Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
console.log("\n5.");
const twoArrays = wallet.concat(wallet);
max = Math.max(...twoArrays);
n = 0;
for (let i = 0; i < twoArrays.length; i++) {
    if (twoArrays[i] == max) {
        n++;
    }
}
console.log("Max number:", max, "Amount of max numbers:", n);
// 6.Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;
console.log("\n6.");
const map2 = twoArrays.map((element, i) => (element === 0 ? i : element));
console.log(map2);
// 7.Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10),
// kad masyvo ilgis būtų lygiai 30;
console.log("\n7.");
const array1 = [...money];
for (let i = money.length; i < 30; i++) {
    array1.push(Math.floor(Math.random() * 11));
}
console.log(array1);
// 8.Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus.
// Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
console.log("\n8.");
console.log(twoArrays);
const array2 = [];
const array3 = [];
twoArrays.forEach((x) => (x <= 2 ? array2.push(x) : array3.push(x)));
console.log("Array:", twoArrays, "\nCoins:", array2, "\nBills:", array3);
// 9.Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas
// būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
console.log("\n9.");
const bigArray = [];
bigArray.push(array2);
bigArray.push(array3);
console.log(bigArray);
// 10.Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį-
// masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
console.log("\n10.");
bigArray.push([
    "KIKA",
    "Euro Vaistinė",
    "Drogas",
    "Ačiū",
    "Lietuvos Geležinkeliai",
    "Mano RIMI",
]);
console.log(bigArray);
// 11.Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
console.log("\n11.");
bigArray[2].sort();
console.log(bigArray);
// 12.Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes
// 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
console.log("\n12.");
for (let i = bigArray[2].length; i < 20; i++) {
    let a = Math.floor(Math.random() * 2);
    if (1 > a) {
        bigArray[2].push("MasterCard");
    } else {
        bigArray[2].push("Visa");
    }
}
console.log(bigArray);
// 13.Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
console.log("\n13.");
let mc = bigArray[2].filter((x) => x === "MasterCard").length;
let v = bigArray[2].filter((x) => x === "Visa").length;
if (mc > v) {
    console.log("MasterCard:", mc);
} else {
    console.log("Visa:", v);
}
// 14.Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų,
// kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
console.log("\n14.");
const tickets = [];
for (let i = 0; i < 10; i++) {
    tickets.push(
        Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000
    );
}
bigArray.push(tickets);
console.log(bigArray);
// 15.Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
console.log("\n15.");
bigArray[3].sort(function (a, b) {
    return a - b;
});
console.log(bigArray);
// 16.Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom (
// generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);
console.log("\n16.");
let fh = [];
let cg = 0;
let sum5 = 0;
while (sum5 <= 500) {
    cg = Math.floor(Math.random() * 8) + 3;
    fh.push(cg);
    sum5 += cg;
}
bigArray.splice(1, 0, fh);
console.log(bigArray);
// 17.Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos -
// jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
console.log("\n17.");
let lucky = 0;
bigArray[4].forEach((tickets) => {
    if (tickets % 777 === 0) {
        lucky++;
    }
});
console.log(lucky);
// console.log(lucky);
// 18.Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas']
// ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
console.log("\n18.");
bigArray.push(["šuo", "katė", "automobilis", "namas", "kiemas"]);
bigArray[5].sort((a, b) => a.length - b.length);
console.log(bigArray[5]);
