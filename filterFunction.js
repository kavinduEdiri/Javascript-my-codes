let numbers =[1,2,3,4,5,6,7,8,9,10];

let dataSet=numbers.filter(function(temp){
		return temp%2 == 0;
});

console.log(dataSet);