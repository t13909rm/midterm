var kaijou = function(n){
	var kaijoukotae=1;
	while(n>1){
		kaijoukotae=kaijoukotae*n;
		n=n-1;
	}
	return kaijoukotae;
}


var factorial = function(n){
	if(Number.isInteger(n)&&n>0){return kaijou(n)}
	if(!Number.isInteger(n)&&n>0){return kaijou(Math.floor(n))}
	if(n<=0){return null}
};