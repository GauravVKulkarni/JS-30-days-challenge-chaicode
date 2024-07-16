//Day 4: Loops

//Activity 1

//task 1
for(let i=1; i<11; i++){
    console.log(i);
}

//task 2
for(let i=5; i<=50; i+=5){
    console.log(i);
}


//Activity 2

//task 3
let sum = 0
let i=0
while(i<11){
    sum+=i
    i++
}
console.log(sum);

//task 4
while(i>0){
    console.log(i);
    i--
}


//Activity 3

//task 5
i=1
do{
    console.log(i);
    i++
}while(i<6)

//task 6
i=1
j=1
fac=8
do{
    i=i*j
    j++
}while(j<=fac)
console.log(i);


//Activity 4

//task 7
i=0
j=0
for(i=0;i<5;i++){
    let currentLine = ``
    for(j=0;j<=i;j++){
        currentLine+=`* `
    }
    console.log(currentLine);
}


//Activity 5

//task 8
for (i=1;i<=10;i++){
    if(i==5){
        continue
    }
    console.log(i);
}

//task 9
for (i=1;i<=10;i++){
    if(i==7){
        break
    }
    console.log(i);
}