function countAge(){
let day = parseInt(document.getElementById("day").value);
let month = parseInt(document.getElementById("month").value);
let year = parseInt(document.getElementById("year").value);


let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1;
let currentDay = currentDate.getDate();

// Calcul de l'âge
let countYear = currentYear - year;
let countMonth = currentMonth - month;
let countDay = currentDay - day; // 07 - 26 = -19 that is the problem.

// Ajustement si le jour ou le mois ne sont pas encore passés dans l'année
if (countDay < 0) { // si le jour calculer est négative 
    countMonth -= 1; // take off a month from the countmonth
    countDay += new Date(currentYear, currentMonth, 0).getDate(); 
    // quand on choisi 0 comme jour ==> js nous donne le dernier jour du mois (28/29/30/31);
    // for exemple -3 + 31 = 28 
}

if (countMonth < 0) { // si the month is negative 
    countYear -= 1; // take off one year from the year counter
    countMonth += 12; // and add 12 for exemple -5 + 12 = 7
}

// Affichage du résultat
document.getElementById("showday").innerHTML = countDay;
document.getElementById("showmonth").innerHTML = countMonth;
document.getElementById("showyear").innerHTML = countYear;
}