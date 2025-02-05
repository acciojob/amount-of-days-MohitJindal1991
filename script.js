//your JS code here. If required.
function daysOfAYear(num){
	if(num%400==0){
		return 366;
	}
	else if(num%4==0 && num%100!=0){
		return 366;
	}
	else{
		return 365;
	}
}