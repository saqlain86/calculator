function getInput(num)
{
    var inputs = document.getElementById("inputField");
    inputs.value += num;

}

function clrInput()
{
    var inputs = document.getElementById("inputField");
    inputs.value = "";
}

function getResult()
{
    try{
        var inputs = document.getElementById("inputField");
        inputs.value = eval(inputs.value);
        
    }
    catch{
        alert("Invalid..")
    }
}

function squareNumber(a)
{
    var inputs = document.getElementById("inputField");
    inputs.value *= inputs.value;
}

function deleteChar()
{
    var inputs = document.getElementById("inputField");
    inputs.value = inputs.value.slice(0,-1)

}