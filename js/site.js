//Get the values from the page
//Starts or controller funciton
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    //Parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue)&& Number.isInteger(endValue)) {
        //Call generate numbers
        let numbers =  generateNumber(startValue, endValue);
        displayNumbers(numbers);

    } else {
        alert("You must have integers");
    }
   
}


//Generate numbers from startvalue to the endValue 
//Logic function(s)
function generateNumber(sValue, eValue){
    let numbers = []
    for(let index = sValue; index <= eValue; index++){
        numbers.push(index);

    }
    return numbers
}


function isPrime(n){
    if(n<3) return n>1;
    else if (n%2==0 || n%3==0) return false
    else if (n<25) return true;
    let i = 5;
    while (i*i <= n){
        if(n%i==0 || n%(i+2)==0) return false
        i += 6
    }
    return true

}

//Display the numbers and mark even numbers bold
//Display or view functions
function displayNumbers(numbers){
    let templateRows = "";
    let className = "notPrime"
    for(let index=0; index < numbers.length; index++){
        let number = numbers[index];
        if (isPrime(number)==true){
            className = "prime"
        } else {
            className = "notPrime"
        }
        templateRows += `<tr><td class = "${className}" > ${number} </td><tr>`;
    }

    document.getElementById("results").innerHTML = templateRows

}