//Day 3: Control Structures

//Activity 1

let number = 3
let age = 32

//task 1
if (number<0){
    console.log(`Negative`);
}
else if (number>0){
    console.log(`Positive`);
}
else{
    console.log(`Zero`);
}

//task 2
if (age<18){
    console.log(`Ineligible`)
}
else {
    console.log(`Eligible`)
}


//Activity 2

let a = 1, b = 2, c = 3

//task 3
if (a>b){
    if (a>c){
        console.log(`a = ${a}`);
    }
    else{
        console.log(`c = ${c}`);
    }
}
else{
    if (b>c){
        console.log(`b = ${b}`);
    }
    else{
        console.log(`c = ${c}`);
    }
}


//Activity 3

choice = 4
marks = 50
marksToGrade = Math.floor(marks/20)

//task 4
switch(choice){
    case 1:console.log(`Monday`);
    break;
    case 2:console.log(`Tuesday`);
    break;
    case 3:console.log(`Wednesday`);
    break;
    case 4:console.log(`Thursday`);
    break;
    case 5:console.log(`Friday`);
    break;
    case 6:console.log(`Saturday`);
    break;
    case 7:console.log(`Sunday`);
    break;
    default:console.log(`Invalid choice`);
    break;
}

//task 5
switch(marksToGrade){
    case (5):console.log(`a`);
    break;
    case (4):console.log(`a`);
    break;
    case (3):console.log(`b`);
    break;
    case (2):console.log(`c`);
    break;
    case (1):console.log(`d`);
    break;
    case (0):console.log(`e`);
    break;
    default:console.log(`Invalid choice`);
    break;
}


//Activity 4

num = 453

console.log(num%2==0?`Even number`:`Odd number`);


//Activity 5

year = 2024

console.log(year%4==0? year%100==0?year%400==0?`Leap year`:`Not a leap year`:`Leap year`:`Not a leap year`);