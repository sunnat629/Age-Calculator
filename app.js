var m_names = new Array("January", "February", "March", 
"April", "May", "June", "July", "August", "September", 
"October", "November", "December");

var weekday=new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var d = new Date();
	
var year = 0;
var month = 0;
var week = 0;
var days = 0;
var hour = 0;
var min = 0;
var sec = 0;
var difference = 0;
var pa = 0;
var pb = 0;
var pc = 0;
var m = 0;
var tmp = 0;
var yDay = 0;
var yMonth = 0;
var res = new Araay();
var names= null;	

	var a = 0;
	var b = 0;
	var c = 0;
	var n = 0; 
	
	
	var	diffyear = 0;
	var	diffmonth = 0;
	var	diffday = 0;

	var year1 = null;
	
function main(){
	names = dates.inpt.value;
	res = names.split("-");
	if(res.toString() != 0){
		if(res[0] <= d.getFullYear()){
			if(res[0] == d.getFullYear()){
				if(res[1] <= (d.getMonth()+1)){
					if(res[1] == (d.getMonth()+1)){
						if(res[2] <= (d.getDate())){
							calculate();
						}
						else{
							alert("You have entered a future date.");
						}
					}
					else{
						calculate();	
					}
				}
				else{
					alert("You have entered a future date.");
				}	
			}
			else{
				calculate();
			}	
		}
		else {
			alert("You have entered a future date.");
		}	
	}
	else{
		alert("You have entered nothing.");
	}
}

function calculate(){
	past = new Date();
	if(res[1] == 09){
		pb = 9;
	}
	else if(res[1] == 08){
		pb = 8;
	}
	else{
		pb = res[1]-1;
	}
	
	
	pc = res[0];
	pa = res[2];
	past.setDate(pa);
	past.setMonth(pb);
	past.setFullYear(pc);
	m = weekday[past.getUTCDay()];

today = new Date();
difference = today - past;
days = Math.floor(difference/(1000*60*60*24));
week = Math.floor(days/7);
hour = days*24;
min = hour*60;
sec = min*60;
year = Math.round(difference/(1000*60*60*24*365));
month = Math.round((difference*12)/(1000*60*60*24*365));


alerts();

}

function givenDay(){
	 a = d.getDate();
	 b = d.getMonth();
	 c = d.getFullYear();
	 n = weekday[d.getUTCDay()]; 
	
	
		diffyear = c-pc;
		diffmonth = b-pb;
		diffday = a-pa;	
		
				if(diffday<0){
				diffmonth=diffmonth-1;
				diffday=diffday+daysInMonth(pb,pc);
				}
				
				if(diffmonth<0){
				diffyear=diffyear-1;
				diffmonth=diffmonth+12
				}
}

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}


function alerts(){
	givenDay();
	yearS();
	document.getElementById("bday").innerHTML="&nbsp"+m+", "+m_names[pb]+" "+pa + ", " +pc ;
	document.getElementById("today").innerHTML="&nbsp"+n+", "+m_names[b]+" "+a + ", " + c ;
	document.getElementById("byear").innerHTML="&nbsp"+ diffyear+" "+year1+" "+diffmonth+" months "+diffday+" days.";
	document.getElementById("year").innerHTML="&nbsp"+ year+" "+year1+". \(round\)" ;
	document.getElementById("month").innerHTML="&nbsp"+ month+ " months." ;
	document.getElementById("week").innerHTML="&nbsp"+ week+ " weeks. \(round\)" ;
	document.getElementById("day").innerHTML="&nbsp"+ days +" days.";
	document.getElementById("hour").innerHTML="&nbsp"+ hour +" hours.";
	document.getElementById("min").innerHTML="&nbsp"+ min+ " minutes." ;
	document.getElementById("sec").innerHTML="&nbsp"+ sec+ " seconds.";
	/*
	alert("Your Birthday: "+m+"- "+m_names[pb]+" "+pa + ", " +pc+"\n"
	+"Today: "+n+"- "+m_names[b]+" "+a + ", " + c+"\n"
	+"Your age: "+diffyear+" years "+diffmonth+" months "+diffday+" days."+"\n"
	+"In Year: "+year+"\n"
	+"In Month: "+month+"\n"
	+"In Weeks: "+week+"\n"
	+"In Day: "+days+"\n"
	+"In Hour: "+hour+"\n"
	+"In Minutes:"+min+"\n"
	+"In Seconds: "+sec+"\n"
	);
	*/
	}
function yearS(){


if (year < 2 || diffyear < 2){
	year1 = "year";
}
else{
year1 = "years";
}
}