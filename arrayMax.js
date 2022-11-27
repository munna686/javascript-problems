var marks = [45, 81, 100, 56, 35, 23, 26,69, 101, 23, 69, 85, 42, 83, 1025]
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}
console.log('Highest Value Is: ' + max)