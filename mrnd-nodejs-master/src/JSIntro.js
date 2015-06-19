
exports.Sum = function(num1, num2){

	return num1+num2;
}

exports.SumOfArray = function (arrayOfNums) {

    var sum = 0;
    for (var i = 0; i < arrayOfNums.length ; i++)
        sum = sum + arrayOfNums[i];
    return sum;

}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function (arrayOfNums) {
    var i=0,sum=0,unique_array=[];
    
    for(;i<arrayOfNums.length;i++)
    {
        if(unique_array.indexOf(arrayOfNums[i])===-1)
        {
            sum = sum + arrayOfNums[i];
            unique_array.push(arrayOfNums[i]);
        }
    }
    return sum;

}

exports.ReverseString = function(str){

    var reversed_str="",i=0,j=0;
    for(i=str.length-1;i>=0;i--,j++)
    {
        reversed_str+=str[i];
    }
    
    return reversed_str;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){

    var reverse_arrayof_strings = [];
    for(var i=0;i<arrayOfStrings.length;i++)
    {
        var str = arrayOfStrings[i];
        reverse_arrayof_strings.push(exports.ReverseString(str));
    }
    return reverse_arrayof_strings;
    
}