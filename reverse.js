function reverseString(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){
        var character = str[i];
        reverse = character + reverse;
    }
    return reverse
}
var statement = "Hello Alien bhai brothers"
var forAlien = reverseString(statement)
console.log(forAlien)
var foodBlog = reverseString("khida lagse miya bhai")
console.log(foodBlog)