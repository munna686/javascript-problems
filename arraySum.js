
function getArraySum(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
    var element =  numbers[i]
    sum = sum + element;

    }
    return sum;
}
var numbers = [40, 80, 60, 53, 12, 69, 90, 99, 78,] 
var numbers2 = [50, 60, 69, 54,87,99,525,69,45,87,]
var result = getArraySum(numbers2)

console.log('Total of the numbers : ' + result)