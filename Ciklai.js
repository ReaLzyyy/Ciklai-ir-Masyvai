// 1.console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
console.log("\n1.");
for (let i = 0; i < 5; i++) {
    console.log("Labas");
}
// 2.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);
console.log("\n2.");
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 3.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);
console.log("\n3.");
for (let i = 0; i < 50; i += 10) {
    console.log(i);
}
// 4.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);
console.log("\n4.");
for (let i = 49; i < 54; i += 1) {
    console.log(i);
}
// 5.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);
console.log("\n5.");
for (let i = 4; i > -1; i--) {
    console.log(i);
}
// 6.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!,
// if’ų nenaudoti, ciklas for);
console.log("\n6.");
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}
// 7.console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
console.log("\n7.");
for (i = 0; i < 5; i++) {
    let a = Math.floor(Math.random() * 11);
    console.log(a);
}
// 8.console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
// Paskutinis atspausdintas skaičius turi būti 5;
console.log("\n8.");
while (true) {
    let numb = Math.floor(Math.random() * 11);
    console.log(numb);
    if (numb == 5) {
        break;
    }
}
// 9.console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
// Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
console.log("\n9.");
let sum = 0;
while (sum <= 100) {
    let numb = Math.floor(Math.random() * 11);
    console.log(numb);
    sum += numb;
}
// 10.console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
// Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
console.log("\n10.");
let loop = 0;
while (true) {
    let numb = Math.floor(Math.random() * 11);
    loop++;
    console.log(numb);
    if (numb == 5 || numb == 7) {
        break;
    }
}
console.log("Spun:", loop);
// 11.console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
//Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
console.log("\n11.");
let sum1 = 0;
let loop1 = 0;
while (loop1 < 11 || sum1 <= 20) {
    let numb = Math.floor(Math.random() * 11);
    loop1++;
    sum1 += numb;
    console.log(numb);
}
console.log("Spun:", loop1);
// 12.console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
//Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;
console.log("\n12.");
let oddn = 0;
while (oddn < 3) {
    numb = Math.floor(Math.random() * 11);
    console.log(numb);
    if (numb % 2 !== 0) {
        oddn++;
    }
}
// 13.console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje).
//Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;
console.log("\n13.");
while (true) {
    let numb1 = Math.floor(Math.random() * 11);
    let numb2 = Math.floor(Math.random() * 11);
    console.log(numb1, numb2);
    if (numb1 === numb2) {
        break;
    }
}
//console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje).
//Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
console.log("\n14.");
let foh = 0;
let soh = 0;
while (foh <= 100 || soh <= 100) {
    let numb1 = Math.floor(Math.random() * 11);
    let numb2 = Math.floor(Math.random() * 11);
    foh += numb1;
    soh += numb2;
    console.log(numb1, numb2);
}
console.log("Sum1:", foh, "Sum2:", soh);
//console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje).
//Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių  (skaičiai atskiruose stulpeliuose).
console.log("\n15.");
let oddn1 = 0;
let oddn2 = 0;
while (oddn1 <= 3 || oddn2 <= 3) {
    let numb1 = Math.floor(Math.random() * 11);
    let numb2 = Math.floor(Math.random() * 11);
    console.log(numb1, numb2);
    if (numb1 % 2 !== 0) {
        oddn1++;
    }
    if (numb2 % 2 !== 0) {
        oddn2++;
    }
}
console.log("Odd numbers1:", oddn1, "Odd numbers2:", oddn2);
