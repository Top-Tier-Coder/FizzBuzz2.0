
function FizzBuzzA(value1, value2){
    let returnValue = "";
    for(let i = 1;i<=100;i++){
        if(i%value1==0 && i%value2==0){
            returnValue += 'FizzBuzz ';
        }
        else if (i%value1 == 0){
            returnValue += 'Fizz ';
        }
        else if (i%value2 == 0){
            returnValue += 'Buzz ';
        }
        else{
            returnValue += i + ' ';
        }
    }
    return returnValue;
}

function FizzBuzzB(value1, value2){
    let returnValue = "";
    let Fizz = false;
    let Buzz = false;
    for(let i = 1;i<=100;i++){
        Fizz = i%value1 == 0;
        Buzz = i%value2 == 0;
        switch(true){
            case Fizz && Buzz :{
                returnValue += 'FizzBuzz ';
                break;
            }
            case Fizz :{
                returnValue += 'Fizz ';
                break;
            }
            case Buzz :{
                returnValue += 'Buzz ';
                break;
            }
            default : {
                returnValue +=i + ' ';
                break;
            }
        }
    }
    return returnValue;
}
// Non-Traditional Approach
function FizzBuzzC(value1,value2){
    let returnValue = "";
    for (let i =1;i<100;i++){
        returnValue += ((i%value1==0 ? 'Fizz' : '') + (i%value2==0 ? 'Buzz' : '') || i) + ' ';
    }
    return returnValue;
}

//FizzBuzz the Meta Strat
function FizzBuzzD(value1, value2){
    let returnArray= [];
    for(let i = 1; i<=100;++i){
        returnArray[i] = ((i%value1==0 ? 'Fizz' : '') + (i%value2==0 ? 'Buzz' : '') || i); 
    }
    return returnArray;
}

// Call and Use Our FizzBuzz
function buzzIt(){
    let output="";
    let val1 = document.getElementById("Fizzvalue").value;
    let val2 = document.getElementById("Buzzvalue").value;
    output = FizzBuzzC(val1,val2);
    document.getElementById("results").innerHTML = output;
};

















// =====Solution 2=========


// for (var i = 1; i <= 100; i++) {

//     var output = "";

//     if( i % 3 == 0 ) { output += "Fizz"; }
//     if( i % 5 == 0 ) { output += "Buzz"; }

//     if(output == "") {output = i; }
//         return output

// }