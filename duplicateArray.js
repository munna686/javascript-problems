var studentId = [4, 5,9,6,4,8,9,7,6,22,5,36,];
var uniqeId = [];
for(i = 0; i < studentId.length; i++){
    var element = studentId[i]
    var index = uniqeId.indexOf(element)
    if(index == -1){
        uniqeId.push(element)
    }
}
console.log(uniqeId);