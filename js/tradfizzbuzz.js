function fizzBuzzA(value1, value2){
    let returnValue = "";
    for(let i = 1;i<=100;1++){
        if(i%value1==0 && i%value2==0){
            returnValue += 'FizzBuzz ';
        }
        else if (ivalue1 ==0){
            returnValue += 'Fizz ';
        }
        else if (ivalue2 == 0){
            returnValue += 'Buzz ';
        }
        else{
            returnValue += i + ' ';
        }
    }
    return returnValue;
}

