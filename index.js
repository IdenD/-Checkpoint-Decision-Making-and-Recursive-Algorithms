//I- Prise de décision (if-else et switch)
//  1. Vérificateur d'année bissextile
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Exemple d'utilisation
const year = 2024;
if (isLeapYear(year)) {
   // console.log(year + " est une année bissextile.");
} else {
    //console.log(year + " n'est pas une année bissextile.");
}

// 2. Tarification des billets
function ticketPrice(age) {
    let price;
    if (age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else {
        price = 20;
    }
    return price;
}
const age = 16;
// console.log("Le prix du billet est de $" + ticketPrice(age));




// II- Récursivité
//1. Séquence de Fibonacci
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const n = 6;
// console.log("Le " + n + "ème nombre de Fibonacci est " + fibonacci(n));


// 2. Palindrome Checker
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    function checkPalindrome(left, right) {
        if (left >= right) {
            return true;
        }
        if (str[left] !== str[right]) {
            return false;
        }
        return checkPalindrome(left + 1, right - 1);
    }
    
    return checkPalindrome(0, str.length - 1);
}

// Exemple d'utilisation
const str = "A man, a plan, a canal, Panama";
if (isPalindrome(str)) {
   // console.log("'" + str + "' est un palindrome.");
} else {
    // console.log("'" + str + "' n'est pas un palindrome.");
}
