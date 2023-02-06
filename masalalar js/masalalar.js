///1. Palindrome songa tekshiruvchi funksiya tuzing (121)           
//2. kabisa yiliga tekshiruvchi funksiya           
//Kabisa yil (arabcha: toʻliq) — oddiy yildan bir kun (fevral oyida) ortiq boʻlgan kalendar yil. Bunda 4 ga qoldiqsiz boʻlinadigan yil Kabisa yildir (faqat ikkita nol bilan tugab, 400 ga boʻlinmaydigan yil bundan mustasno. Masalan: 1800 , 1900, 2100-yillar Kabisa yil emas)           
//3.Funksiyaga ixtiyoriy sonlardan iborat array kiritiladi shu arraydagi manfiy sonlarni alohida qilib ularni array ko’rinishida qaytaring.


//1 masala
let isPalindrome = function(x){
    if(x === 0 || x === 1) return true;
    if(x<1) return false;
    let value = 1;
    while(x / value > 10){
        value = value * 10;

    }
    while(x>0){
        if(Math.floor(x/value) === x % 10){
            x = Math.floor((x%value)/10)
            value = Math.floor(value / 100)
        } else return false;
    }
    return true
}

//2  masala
function checkLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

let year = prompt('Enter a year:');

checkLeapYear(year);


// 3 masala
const greaterThan5 = [1,2,3,4,5,6,7,8];
const  nonGreaterThan5 = [1,2,3,4,5];


let someGreaterThan5 = nums1.some( num => num > 5) 
let noneGreaterThan5 = nums2.some( num => num > 5) 

console.log(noneGreaterThan5);